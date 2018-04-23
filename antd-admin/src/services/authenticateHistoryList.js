import { request, config } from 'utils'

const { api } = config
const { authenticateHistoryList } = api

export function query (params) {
  return request({
    url: authenticateHistoryList,
    method: 'get',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: authenticateHistoryList,
    method: 'delete',
    data: params,
  })
}
