import axios from 'axios';

axios.defaults.baseURL = "http://47.102.133.34:3000/";

axios.interceptors.request.use(function (config) {
  return config
},function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
  return response
},function (err) {
  return promise.reject(err)
})


// export const jounus = ()=>{
//   return axios.post(`https://v1.itooi.cn/netease/mv/top`).then(res=>res.data)
// }


export async function jounus(){
  return await axios.post(`https://v1.itooi.cn/netease/mv/top`);
}

export async function getHomenews(){
  return await axios.post(`http://192.168.0.103:3000/api/user`);
}