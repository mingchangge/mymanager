import React from 'react';
import {Row,Col} from 'antd';
//导入子组件
import NavLeft from './components/NavLeft';
import Header from './components/Header'; //index的文件名可以不写，默认加载index
import Footer from './components/Footer';
//导入样式
import './style/common.less';
export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={21} className="main">
                    <Header/>
                    <Row className="content">{this.props.children}</Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}