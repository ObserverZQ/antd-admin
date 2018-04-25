const Mock = require('mockjs')
const { config } = require('./common')

const { apiPrefix } = config

let postId = 0
// const posts = Mock.mock({
//   'data|200': [
//     {
//       id: '@id',
//       title: '@ctitle(10,20)',
//       source: '@ctitle(3,8)',
//       createTime: '@datetime',
//       content: '@paragraph(4)',
//       reason: () => {
//         return Mock.mock('@pick(["内容虚假",'
//           + '"内容低俗", '
//           + '"内容虚假、内容低俗", '
//           + '"盗版侵权", '
//           + '"危险言论", '
//           + '"危险言论、封建迷信", '
//           + '"内容虚假、内容低俗、封建迷信", '
//           + '"封建迷信"])')
//       },
//     },
//   ],
// }).data
const reportMock = [
  {
    id: '1',
    title: '渣渣辉的警告',
    source: 'UC头条',
    createTime: '2018-3-07 10:03:57',
    reason: '内容低俗',
  },
  {
    id: '2',
    title: '教育紧急通知，今年高考大改',
    source: 'UC头条',
    createTime: '2018-2-23 13:02:37',
    reason: '言论虚假',
  },
  {
    id: '3',
    title: '震惊！南大女学生回家开门竟看见如此一幕',
    source: '神马新闻',
    createTime: '2018-4-01 22:33:42',
    reason: '虚假言论, 内容低俗',
  },
  {
    id: '4',
    title: 'ofo回应收购',
    source: 'UC头条',
    createTime: '2018-4-07 07:21:06',
    reason: '违法违规',
  },
  {
    id: '5',
    title: '跳大神这样玩，能有效祛除疾病',
    source: '神马新闻',
    createTime: '2017-12-31 15:53:11',
    reason: '言论虚假',
  },
]
let database = reportMock

module.exports = {

  [`GET ${apiPrefix}/report`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
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
