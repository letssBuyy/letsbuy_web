import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: {
          // Configurações de opções do gráfico, como título, legenda, etc.
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;