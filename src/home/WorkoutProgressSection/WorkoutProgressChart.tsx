import ReactECharts from 'echarts-for-react';

export const WorkoutProgressChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      position: 'right',
      max: '100',
      axisLabel: {
        formatter: '{value} %',
      },
    },
    axisLabel: {
      fontFamily: 'Poppins',
      fontSize: 10.625,
      lineHeight: 16,
      textAlign: 'right',
      color: '#7B6F72',
    },

    grid: {
      top: 18,
      containLabel: true,
      right: 0,
      bottom: 0,
      left: 0,
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 3,
          lt: 5,
          color: 'rgba(0, 0, 180, 0.4)',
        },
      ],
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: 'rgba(157, 206, 255, 1)',
          width: 1,
        },
        areaStyle: {},
        data: [40, 10, 40, 60, 80, 30, 20],
      },
      {
        type: 'line',
        smooth: 0.5,
        symbol: 'none',
        lineStyle: {
          color: 'rgba(197, 139, 242, 1)',
          width: 1,
        },
        data: [50, 60, 50, 40, 60, 50, 40],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '172px', width: '100%' }} />
  );
};
