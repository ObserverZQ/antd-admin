import modelExtend from 'dva-model-extend'
import { query } from 'services/accessed'
import { pageModel } from 'models/common'
import queryString from 'query-string'

export default modelExtend(pageModel, {

  namespace: 'accessed',

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/accessed') {
          dispatch({
            type: 'query',
            payload: {
              status: 1,
              ...queryString.parse(location.search),
            },
          })
        }
      })
    },
  },

  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
