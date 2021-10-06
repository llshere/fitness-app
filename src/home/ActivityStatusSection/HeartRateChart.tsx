import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

export const HeartRateChart = () => {
  const getRandomIntInclusive = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const options = {
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: true,
    },
    yAxis: {
      show: false,
      type: 'value',
      min: 'dataMin',
      max: 'dataMax',
    },
    grid: {
      right: 0,
      left: 0,
    },
    series: [
      {
        data: Array.from({ length: 100 }, () => getRandomIntInclusive(50, 180)),
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(147, 167, 254)',
            },
            {
              offset: 1,
              color: 'RGBA(146, 163, 253,.1)',
            },
          ]),
          width: 2,
        },

        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(147, 167, 254)',
            },
            {
              offset: 1,
              color: 'RGBA(146, 163, 253,.1)',
            },
          ]),
        },
      },
    ],
  };
  return (
    <ReactECharts option={options} style={{ height: '86px', width: '100%' }} />
  );
};
