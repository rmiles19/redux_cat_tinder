import axios from 'axios';
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

export const handleRegister = (
  email, 
  password, 
  passwordConfirmation, 
  history
) => {
  return (dispatch) => {
    axios.post('/api/auth', { 
      email, 
      password, 
      password_confirmation: passwordConfirmation 
    })
      .then( res => {
        dispatch(user(res.data.data))
        history.push('/')
      })
  }
}

export const handleLogin = (
  email, 
  password, 
  history
) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', { 
      email, 
      password
    })
      .then( res => {
        dispatch(user(res.data))
        history.push('/')
      })
  }
}


export const handleLogout = (history) => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        dispatch({ type: LOGOUT })
        history.push('/login')
      })
  }
}

const user = (user) => {
  return { type: LOGIN, user }
}