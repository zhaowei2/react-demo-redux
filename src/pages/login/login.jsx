import React,{Component} from 'react'

import './login.less'
import { Form, Icon, Input, Button } from 'antd';
import {reqLogin} from '../../api/index'
import memory from '../../util/memoryUtil'
// 登录
class Login extends Component{
  handleSubmit = e => {
    console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { username,password} = values
      if (!err) {
        reqLogin(username,password).then(res=>{
          console.log(res)
          if(res.data.code===0){
            memory.user = res.data.data
            this.props.history.push('/')
          }
        })
      }else{
        console.log('error: ');
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <h1>React项目：后台系统管理</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form className="login-form" 
              onClick={this.handleSubmit}
          >
            <Form.Item
            >
              {
                getFieldDecorator('username',{
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                )
              }
            
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
          </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
const warpLogin = Form.create()(Login)
export default warpLogin