const Mock = require('mockjs')
const { config } = require('./common')

const { apiPrefix } = config

let postId = 0
const posts = Mock.mock({
  'data|200': [
    {
      id () {
        postId += 1
        return postId + 10000
      },
      'status|1-4': 1,
      title: '@title',
      author: '@last',
      categories: '@word',
      tags: '@word',
      'views|10-200': 1,
      'comments|10-200': 1,
      name: '@word',
      'times|100-500': 1,
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