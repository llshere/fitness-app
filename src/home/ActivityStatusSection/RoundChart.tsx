import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

export const RoundChart = () => {
  const option = {
    title: {
      text: '230kCal',
      subtext: 'left',
      left: 'center',
      top: '35%',
      textStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        lineHeight: 3,
        color: 'white',
      },
      subtextStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        lineHeight: 3,
        color: 'white',
      },
    },
    angleAxis: {
      max: 100,
      startAngle: -90,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: false,
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: 'placeholder',
        roundCap: true,
      },
      {
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: 'placeholder',
        roundCap: true,
      },
      {
        type: 'bar',
        data: [80],
        coordinateSystem: 'polar',
        name: 'A',
        roundCap: true,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(197, 139, 242, 1)',
          },
          {
            offset: 1,
            color: 'rgba(180, 192, 254, 1)',
          },
        ]),
        showBackground: true,
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      notMerge
      lazyUpdate
      style={{
        height: '82px',
        width: '82px',
      }}
    />
  );
};
