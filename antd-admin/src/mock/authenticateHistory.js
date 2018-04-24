const Mock = require('mockjs')
const { config } = require('./common')

const { apiPrefix } = config

let authenticateHistoryId = 0
const authenticateHistoryList = Mock.mock({
  'data|200': [
    {
      id () {
        authenticateHistoryId += 1
        return authenticateHistoryId + 10000
      },
      'status|1-2': 1,
      title: '@title',
      author: '@last',
      categories: '@word',
      tags: '@word',
      'views|10-200': 1,
      'comments|10-200': 1,
      visibility: () => {
        return Mock.mock('@pick(["Public",'
          + '"Password protected", '
          + '"Private"])')
      },
      date: '@dateTime',
      image () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.author.substr(0, 1))
      },
    },
  ],
}).data
let authenticateHistoryList1 = [
  {
    id: 10176,
    status: 1,
    title: '张国立夜发自拍 调皮回复网友“问候你妈”',
    author: '网易娱乐',
    categories: '娱乐',
    date: '2018-4-24',
    authenticateDate: '2018-4-24',
  },
]
module.exports = {

  [`GET ${apiPrefix}/authenticateHistory`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = authenticateHistoryList1
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            return String(item[key])
              .trim()
              .indexOf(decodeURI(other[key])
                .trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200)
      .json({
        data: newData.slice((page - 1) * pageSize, page * pageSize),
        total: newData.length,
      })
  },
}
