import axios from 'axios';
import Chart from 'react-apexcharts';
import { MissionSum } from 'types/mission';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {


  // FORMA ERRADA = DECLARAR A VARIAVEL COMO ABAIXO
  let chartData: ChartData = { labels: [], series: [] };

  //FORMA ERRADA
  axios.get(`${BASE_URL}/missions/amount-by-jedi`)
      .then((response) => {
        const data = response.data as MissionSum[];
        const myLabels = data.map(x => x.jediName);
        const mySeries = data.map(x => x.sum);

        chartData = { labels: myLabels, series: mySeries }
        console.log(chartData);
      });
      


//  const mockData = {
//    series: [477138, 499928, 444867, 220426, 473088],
//    labels: ['Anakin', 'Mandalorian', 'Obi-Wan', 'Han Solo', 'Luke']
//  }

  const options = {
    legend: {
      show: true
    },

    colors: ['#992720', '#787D75', '#C4C5C5', '#C7A552', '#124F30'],
  }
  
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;


