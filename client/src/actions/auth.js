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
        console.log(res.headers)
        dispatch(user(res.data.data, res.headers))
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
        debugger
        dispatch(user(res.data.data, res.headers))
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

export const validateToken = (callBack = () => {}) => {
  return dispatch => {
    dispatch({ type: 'VALIDATE_TOKEN' });
    const headers = axios.defaults.headers.common;
    axios.get('/api/auth/validate_token', headers)
      .then(res => {
        const user = res.data.data;
        dispatch(user(user, res.headers))
    }).catch(() => callBack());
  };
};

const user = (user, headers) => {
  return { type: LOGIN, user, headers: headers }
}