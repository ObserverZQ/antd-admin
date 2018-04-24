import { request, config } from 'utils'

const { api } = config
const { report } = api

export function query (params) {
  return request({
    url: report,
    method: 'get',
    data: params,
  })
}
