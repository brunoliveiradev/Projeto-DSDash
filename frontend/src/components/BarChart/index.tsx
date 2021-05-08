import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { MissionSuccess } from 'types/mission';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';


type SeriesData = {
  name: string;
  data: number[];
}


type ChartData = {
  labels: {
    categories: string[];
  },
  series: SeriesData[];
}


const BarChart = () => {

  // [nomeDoEstadoInterno, nomeDaFunçãoQueMudaEstado] = useState<parametro>(ValorInicial)
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

    //useEffect: Executar algo na instanciação ou destruição do componente, observar estado
    useEffect(() => {
      axios.get(`${BASE_URL}/missions/success-by-jedi`)
        .then((response) => {
          const data = response.data as MissionSuccess[];
          const myLabels = data.map(x => x.jediName);
          const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));
  
          setChartData({
            labels: {
              categories: myLabels
            },
            series: [
              {
                name: "Success Rate %",
                data: mySeries
              }
            ]
          });
        });
    }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    colors: ['#124F30'],
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;


