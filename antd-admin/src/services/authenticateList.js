import { request, config } from 'utils'

const { api } = config
const { authenticateList } = api

export function query (params) {
  return request({
    url: authenticateList,
    method: 'get',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: authenticateList,
    method: 'delete',
    data: params,
  })
}
