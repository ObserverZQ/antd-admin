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
    status: 2,
    title: '榆树钱手抓饼',
    author: '好豆网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:20',
    result: '内容低俗',
  },
  {
    id: 10177,
    status: 1,
    title: '八重樱花饼',
    author: '好豆网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:19',
    result: '内容低俗',
  }, {
    id: 10178,
    status: 1,
    title: '娄底一市民住院睡午觉时钱包手机被盗，10 万救命钱就他人转走',
    author: 'ZAKER潇湘',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:19',
    result: '合格',
  }, {
    id: 10180,
    status: 1,
    title: '课程惊人！学费 19.5 万，奖金 2.5 万',
    author: '17173游戏',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:18',
    result: '标题夸大',
  }, {
    id: 10181,
    status: 1,
    title: 'Mouse：其实这个赛季打的并不是很好',
    author: '178游戏网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:18',
    result: '合格',
  }, {
    id: 10182,
    status: 1,
    title: '奇迹贼 TWW ',
    author: '178游戏网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '内容低俗',
  }, {
    id: 10184,
    status: 1,
    title: '辽篮庆功宴，主教练急送医院！吃这些药时真的不能喝酒',
    author: '果壳网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '合格',
  }, {
    id: 10185,
    status: 1,
    title: '花钱给宝宝买湿巾，反而可能诱发食物过敏？',
    author: '果壳网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '合格',
  }, {
    id: 10186,
    status: 1,
    title: '今日好物 | 有了它，小偷被你气得竖中指！',
    author: '开撩',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '内容低俗，标题夸大',
  }, {
    id: 10187,
    status: 1,
    title: '远离这些疾病，健康就在眼前！',
    author: '24小时健康加油站',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '标题夸大',
  }, {
    id: 10188,
    status: 1,
    title: '如何美白多吃这 9 种食物',
    author: '网易娱乐',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '内容低俗',
  }, {
    id: 10189,
    status: 1,
    title: ' 脂肪来的太快就像龙卷风，复胖的我已经来不及躲',
    author: '男士健康',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '内容低俗，标题夸大',
  }, {
    id: 10190,
    status: 1,
    title: '夜夜多梦，就说明睡眠质量差吗？',
    author: '春雨医生',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:16',
    result: '合格',
  }, {
    id: 10191,
    status: 1,
    title: '其他检查可以代替 CT 检查吗？这些检查或更适合儿童！',
    author: '家庭医生在线',
    categories: '医院',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:15',
    result: '标题夸大',
  }, {
    id: 10192,
    status: 1,
    title: '长期吃甜食，身体发生 10 种变化！戒掉“糖瘾”只需 21 天',
    author: '腾讯健康',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:15',
    result: '虚假言论，标题夸大',
  }, {
    id: 10193,
    status: 1,
    title: '人体 10 大器官最怕这一个字！别再伤害它们',
    author: '腾讯健康',
    categories: '健康',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:15',
    result: '标题夸大',
  }, {
    id: 10194,
    status: 1,
    title: '海外劳工汇款 中国比菲律宾还多',
    author: '环球网',
    categories: '热点',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:15',
    result: '合格',
  },
  {
    id: 10195,
    status: 3,
    title: '震惊！孕初期不注意这几点你可能会...',
    author: '太平洋亲子网',
    categories: '首页',
    date: '2018-4-25 14:12',
    authenticateDate: '2018-4-25 14:15',
    result: '标题夸大',
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
