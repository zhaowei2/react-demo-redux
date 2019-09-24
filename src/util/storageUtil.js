export default {
  saveUser(){
    localStorage.setItem('user_key',JSON.stringify(user))
  }
}