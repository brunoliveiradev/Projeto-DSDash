import Chart from 'react-apexcharts';

const BarChart = () => {
  
  const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ['#124F30'],
};

const mockData = {
    labels: {
      categories: ['Anakin', 'Mandalorian', 'Obi-Wan', 'Han Solo', 'Luke']
    },
    series: [
        {
            name: "% Baskar Drop Rate",
            data: [43.6, 87.1, 67.7, 45.6, 61.1]                   
        }
    ]
};
 
  return (
    <Chart
      options={{...options, xaxis: mockData.labels}}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;


