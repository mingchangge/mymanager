import React from 'react';
import {Row} from 'antd';
//导入子组件
import Header from './components/Header'; //index的文件名可以不写，默认加载index
import Footer from './components/Footer';
//导入样式
import './style/common.less';
export default class Admin extends React.Component{
    render(){
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content">{this.props.children}</Row>
                <Row>
                    <Footer/>
                </Row>
            </div>
        );
    }
}