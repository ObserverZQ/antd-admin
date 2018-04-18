import { request, config } from 'utils'

const { api } = config
const { userBlack } = api

export function query (params) {
  return request({
    url: userBlack,
    method: 'get',
    data: params,
  })
}

export function create (params) {
  return request({
    url: userBlack.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export function remove (params) {
  return request({
    url: userBlack,
    method: 'delete',
    data: params,
  })
}

export function update (params) {
  return request({
    url: userBlack,
    method: 'patch',
    data: params,
  })
}
