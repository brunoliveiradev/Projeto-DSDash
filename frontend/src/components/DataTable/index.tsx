function DataTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm table-hover table-dark">
        <thead>
          <tr className="text-secondary bg-info">
            <th>Data</th>
            <th>Jedi</th>
            <th>Planetas visitados</th>
            <th>Inimigos eliminados</th>
            <th>Baskar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/04/2021</td>
            <td>Luke</td>
            <td>22</td>
            <td>55</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Obi-Wan</td>
            <td>27</td>
            <td>33</td>
            <td>1111.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Mandalorian</td>
            <td>31</td>
            <td>404</td>
            <td>22222.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Yoda</td>
            <td>51</td>
            <td>250</td>
            <td>6060.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Padme</td>
            <td>14</td>
            <td>5</td>
            <td>10000.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Grogu</td>
            <td>8</td>
            <td>2</td>
            <td>47.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Anakin</td>
            <td>52</td>
            <td>122</td>
            <td>10017.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Han Solo</td>
            <td>64</td>
            <td>77</td>
            <td>5017.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
