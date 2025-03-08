import request from './request'

export const Login = (data) => {    
  return request.post('/users/login', data)
}
export const Register = (data) => {    
  return request.post('/users/register', data)
}
export const UpdataAvatar = () => {    
  return request.patch(`/users/${id}/avatar`)
}
export const UpdateMessage = (data) => {    
  return request.patch(`/users/${id}`, data)
}
export const GetUserInfo = (id) => {    
  return request.get(`/users/${id}`)
}