import { request, config } from 'utils'

const { api } = config
const { authenticate } = api

export function query (params) {
  return request({
    url: authenticate,
    method: 'get',
    data: params,
  })
}

export function create (params) {
  return request({
    url: authenticate.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: authenticate,
    method: 'delete',
    data: params,
  })
}

export function update (params) {
  return request({
    url: authenticate,
    method: 'patch',
    data: params,
  })
}
