const { config, posts } = require('./common')

const { apiPrefix } = config


let posts2 = [
  {
    id: 10076,
    status: 1,
    title: '张国立夜发自拍 调皮回复网友“问候你妈”',
    author: '网易娱乐',
    categories: '娱乐',
    machine: '40.38, 55.25, 44.55, 7.32',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10077,
    status: 1,
    title: '弗格森：自豪拥有温格这样的对手兼朋友',
    author: '虎扑足球',
    categories: '体育',
    machine: '38.94, 7.22, 66.54, 3.34',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10078,
    status: 1,
    title: '街角有风景！庐阳老城区启动八处零星绿地建设项目',
    author: '合肥晚报',
    categories: '首页',
    machine: '7.22, 35.25, 56.33, 60.01',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10079,
    status: 1,
    title: '若特朗普开除他，24 小时之内将发生暴乱',
    author: '观察者网',
    categories: '国际',
    machine: '8.21, 1.22, 44.52, 55.23',
    human: '标题夸大',
    expert: '标题夸大',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10080,
    status: 1,
    title: '朝鲜宣布停止核试验 特朗普：这是一个重大进展！',
    author: '新华国际',
    categories: '国际',
    machine: '12.84, 53.22, 40.97, 48.33',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10081,
    status: 1,
    title: '这些单品超 in 却槽点满满，跟风要慎重',
    author: 'Miss的时尚范',
    categories: '时尚',
    machine: '57.44, 33.21, 9.96, 52.31',
    human: '标题夸大',
    expert: '标题夸大',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10082,
    status: 1,
    title: '台湾芯片商股价暴跌，一天损失一个永辉超市',
    author: '每日经济新闻',
    categories: '财经',
    machine: '26.33, 7.80, 29.23, 50.78',
    human: '虚假言论',
    expert: '标题夸大，虚假言论',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10083,
    status: 1,
    title: '稀奇！男子钓到罕见金黄色剔透大鱼',
    author: '江南都市报·ZAKER南昌',
    categories: '国内',
    machine: '12.22, 39.49, 29.32, 44.23',
    human: '标题夸大',
    expert: '标题夸大',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10084,
    status: 1,
    title: '朝鲜宣布停止核试 ，日本称不满',
    author: '环球网',
    categories: '国际',
    machine: '39.88, 8.38, 58.29, 22.30',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10085,
    status: 1,
    title: '中兴事件连锁反应 上游相关生产线员工放假',
    author: '经济观察网',
    categories: '热点',
    machine: '22.91, 32.33, 22.43, 59.22',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' √ ',
  }, {
    id: 10086,
    status: 1,
    title: '四川双流现“致命垃圾坑”：一旦失足 呼救时间都没有',
    author: '财经',
    categories: '热点',
    machine: '10.22, 47.31, 33.54, 54.81',
    human: '标题夸大',
    expert: '标题夸大，虚假言论',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10087,
    status: 1,
    title: '颤抖！妈妈晒出一张照片，让人想起被它支配过的童年',
    author: '都市快报',
    categories: '热点',
    machine: '22.30, 50.66, 39.44, 8.32',
    human: '标题夸大',
    expert: '标题夸大',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10088,
    status: 1,
    title: '饮酒率超 60%，中年男人为什么爱喝酒？',
    author: 'ZAKER贵阳',
    categories: '热点',
    machine: '19.28, 34.53, 29.43, 50.93',
    human: '合格',
    expert: '合格',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10089,
    status: 1,
    title: 'PGone 夜宿门后首发文！',
    author: '网易娱乐',
    categories: '娱乐',
    machine: '8.32, 10.30, 59.33, 22.39',
    human: '内容低俗',
    expert: '内容低俗',
    date: '2018-4-24',
    finalResult: ' × ',
  }, {
    id: 10090,
    status: 1,
    title: '关晓彤终于改发型了 从少女变辣妹',
    author: '腾讯娱乐',
    categories: '娱乐',
    machine: '29.33, 32.44, 9.35, 50.33',
    human: '标题夸大',
    expert: '标题夸大',
    date: '2018-4-24',
    finalResult: ' × ',
  },
]

let database = posts2
module.exports = {

  [`GET ${apiPrefix}/posts`] (req, res) {
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
