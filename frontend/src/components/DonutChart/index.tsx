import Chart from 'react-apexcharts';

const DonutChart = () => {

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Mandalorian', 'Obi-Wan', 'Han Solo', 'Luke']
  }

  const options = {
    legend: {
      show: true
    },

    colors: ['#992720', '#787D75', '#C4C5C5', '#C7A552', '#124F30'],
  }
  
  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;


