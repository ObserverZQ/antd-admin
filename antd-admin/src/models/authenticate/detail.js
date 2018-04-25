import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/authenticate'

export default {

  namespace: 'authenticateDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log('/authenticate/:id')
        const match = pathToRegexp('/authenticate/:id').exec(pathname)
        console.log(match)
        if (match) {
          dispatch({ type: 'query', payload: { id: match[1] } })
        }
      })
    },
  },

  effects: {
    * query ({ payload }, { call, put }) {
      const data = yield call(query, payload)
      const {
        success, message, status, ...other
      } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
}
