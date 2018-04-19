import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './theme/macarons.js'

const SimpleChartComponent = () => {
  const option = {
    title: {
      text: '堆叠区域图',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['娱乐', '体育', '国际'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '娱乐',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [60, 62, 62.5, 64, 63, 63.7, 65],
      },
      {
        name: '体育',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [66, 72, 71, 74, 79, 83, 81],
      },
      {
        name: '国际',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [73, 72, 80, 84, 90, 83, 91],
      },
    ],
  }
  let code = '<ReactEcharts \n' +
                    '    option={this.getOtion()} \n' +
                    "    style={{height: '350px', width: '100%'}}  \n" +
                    "    className='react_for_echarts' />"
  return (
    <div className="examples">
      <div className="parent">
        <label> render a Simple echart With <strong>option and height</strong>: </label>
        <ReactEcharts
          option={option}
          style={{ height: '450px', width: '100%' }}
          className="react_for_echarts"
          theme="macarons"
        />
        <label> code below: </label>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}


export default SimpleChartComponent
