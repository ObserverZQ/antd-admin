import React from 'react'
import ReactHighcharts from 'react-highcharts'
import highchartsMore from 'highcharts-more'
import highchartsExporting from 'highcharts-exporting'

highchartsMore(ReactHighcharts.Highcharts)
highchartsExporting(ReactHighcharts.Highcharts)

const config = {
  chart: {
    polar: true,
    height: 700,
  },
  title: {
    text: '系统分类鉴定正确率',
  },
  xAxis: {
    categories: ['娱乐', '国际', '国内', '军事', '旅游', '游戏', '汽车', '科技', '财经'],
  },
  series: [{
    data: [59.9, 71.5, 66.4, 69.2, 74.0, 61.0, 65.6, 68.5, 76.4],
  }],
  pane: {
    size: 450,
  },
}

const HighMoreComponent = () => {
  return <ReactHighcharts config={config} />
}

export default HighMoreComponent
