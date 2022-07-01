
import * as types from './actiontype';
import axios from 'axios';

const login =(payload)=>(dispatch)=>{

    dispatch({type: types.USER_LOGIN_REQUEST});
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
    return axios({
        method: 'POST',
        url: '/api/login',
        baseURL: 'https://reqres.in',
        data:payload,
    })
    .then((r)=>dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:types.USER_LOGIN_FAILUER}))
}


export {login}