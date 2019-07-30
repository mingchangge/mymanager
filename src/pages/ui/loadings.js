import React from 'react';
import {Card,Spin,Icon,Alert} from 'antd';
import './ui.less';
export default class Loadings extends React.Component{
    render(){
        const icon=<Icon type="plus" style={{fontSize:24}}/>;
        const icon1=<Icon type="loading" style={{fontSize:24}}/>;
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 20px'}}/>
                    <Spin size="large"/>
                    {/*Spin：加载的图片是静态的，不会自动旋转*/}
                    <Spin indicator={icon} style={{marginLeft:20}} spinning={true}/>
                    <Spin indicator={icon1} style={{marginLeft:20}} spinning={true}/>
                </Card>
                <Card title="内容遮罩">
                    <Alert message="React" description="123456" type="info" style={{margin:'20px 0'}}/>
                    <Spin>
                        <Alert message="React" description="Spin嵌套用法" type="warning"/>
                    </Spin>
                    <Alert message="React" description="不嵌套Spin用法" type="warning"/>
                    <Spin tip="加载中..." indicator={icon1}>
                        <Alert message="React" description="Spin嵌套用法：tip属性+indicator属性" type="warning"/>
                    </Spin>
                </Card>
            </div>
        );
    };
}