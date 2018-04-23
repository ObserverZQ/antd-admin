import { request, config } from 'utils'

const { api } = config
const { authenticateHistory } = api

export function query (params) {
  return request({
    url: authenticateHistory,
    method: 'get',
    data: params,
  })
}
