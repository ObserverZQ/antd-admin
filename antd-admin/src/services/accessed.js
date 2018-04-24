import { request, config } from 'utils'

const { api } = config
const { accessed } = api

export function query (params) {
  return request({
    url: accessed,
    method: 'get',
    data: params,
  })
}
