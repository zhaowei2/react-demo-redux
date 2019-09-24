import ajax from './ajax'


export const reqLogin = (username,password) => ajax('/admin/systemAdminUser/loginpwd',{
  body:{
    "strMobile": username,
    "strPwd": password
  }
})