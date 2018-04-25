const Mock = require('mockjs')
const { config } = require('./common')

const { apiPrefix } = config


const posts = Mock.mock({
  'data|6-9': [
    {
      'id|+1': 601,
      'status|1-4': 1,
      'name|+1': [
        '龙腾网',
        '联合早报',
        'FT中文网',
        '凤凰智库',
        '大洋网',
        '知乎推荐',
        '观察者网',
        '华尔街鉴闻',
        'IT之家',
      ],
      'times|100-500': 1,
      date: '@dateTime',
    },
  ],
}).data
let database = posts

module.exports = {

  [`GET ${apiPrefix}/accessed`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },
}
