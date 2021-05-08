import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MissionPage } from "types/mission";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

function DataTable() {

  //Comunicação entre componentes
  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<MissionPage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  //vai observar o activePage, sempre que mudar, busca da API a pagina atualizada
  useEffect(() => {
    axios.get(`${BASE_URL}/missions?page=${activePage}&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data);
      })

  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  }


  return (
    <>
    <Pagination page={page} onPageChange={changePage}/>
      <div className="table-responsive">
        <table className="table table-striped table-sm table-hover table-dark">
          <thead>
            <tr className="text-secondary bg-info">
              <th>Data</th>
              <th>Jedi</th>
              <th className="text-center">Spaceships</th>
              <th className="text-center">Inimigos Eliminados</th>
              <th>Baskar</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map(item => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.jedi.name}</td>
                <td className="text-center">{item.visited}</td>
                <td className="text-center">{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
