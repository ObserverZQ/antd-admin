import { request, config } from 'utils'

const { api } = config
const { userBlacklist } = api

export function query (params) {
  return request({
    url: userBlacklist,
    method: 'get',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: userBlacklist,
    method: 'delete',
    data: params,
  })
}
