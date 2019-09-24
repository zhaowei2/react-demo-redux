import React,{Component} from 'react'
// import {Redirect} from 'react-router-dom'
// import memory from '../../util/memoryUtil'
import { Layout } from 'antd';
import LeftNav from '../components/left-nav'

const { Header, Footer, Sider, Content } = Layout;

// 登录
export default class Admin extends Component{
  render(){
    // if(memory.user){
    //   return  <Redirect to='/login'/>
    // }
    return (
      <Layout style={{height:'100%'}}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}