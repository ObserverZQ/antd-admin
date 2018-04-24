// const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

// let userBlacklistData = Mock.mock({
//   'data|50-60': [
//     {
//       id: '@id',
//       name: '@ctitle(3,5)',
//       nickName: '@last',
//       phone: /^1[34578]\d{9}$/,
//       'age|11-99': 1,
//       address: '@cparagraph(1)',
//       isMale: '@boolean',
//       email: '@url',
//       createTime: '@datetime',
//       avatar () {
//         return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
//       },
//     },
//   ],
// })
//
//
// let database1 = userBlacklistData.data
let database1 = [
  {
    id: 301,
    name: 'UC头条',
    link: 'https://www.uc.com/',
  },
  {
    id: 302,
    name: '神马新闻',
    link: 'https://www.shenma.com/',
  },
  {
    id: 303,
    name: '懂球哥',
    link: 'https://www.dongqiuge.cn/',
  },
  {
    id: 304,
    name: '瓜壳网',
    link: 'https://www.guake.com/',
  },
]

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

module.exports = {
  [`GET ${apiPrefix}/userBlacklist`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database1
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'createTime') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
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

  [`DELETE ${apiPrefix}/userBlacklist`] (req, res) {
    const { ids } = req.body
    database1 = database1.filter(item => !ids.some(_ => _ === item.id))
    res.status(204).end()
  },


  [`POST ${apiPrefix}/userBlack`] (req, res) {
    const newData = req.body
    // newData.createTime = Mock.mock('@now')
    // newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', newData.nickName.substr(0, 1))
    newData.id = Mock.mock('@id')

    database1.unshift(newData)

    res.status(200).end()
  },

  [`GET ${apiPrefix}/userBlack/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database1, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/userBlack/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database1, id, 'id')
    if (data) {
      database1 = database1.filter(item => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/userBlack/:id`] (req, res) {
    const { id } = req.params
    const editItem = req.body
    let isExist = false

    database1 = database1.map((item) => {
      if (item.id === id) {
        isExist = true
        return Object.assign({}, item, editItem)
      }
      return item
    })

    if (isExist) {
      res.status(201).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
}
