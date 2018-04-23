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

export function create (params) {
  return request({
    url: authenticateHistory.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: authenticateHistory,
    method: 'delete',
    data: params,
  })
}

export function update (params) {
  return request({
    url: authenticateHistory,
    method: 'patch',
    data: params,
  })
}
