import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: {
          // Configurações de opções do gráfico de linha
          maintainAspectRatio: true,
          responsive:true
        },
      });
    }
  }, [data]);


  return <canvas ref={chartRef} />
};

export default LineChart;