import React from 'react';
import {Card} from 'antd';
import echartTheme from './../echartTheme';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
export default class Line extends React.Component{
    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    };
    getOption=()=>{
        return   {
            title:{
                text:'用户骑行订单',
            },
            tooltip:{
                trigger:'axis',
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[1000,2300,2450,2800,3000,3300,3400]
                }
            ]
        };
    };
    getOption2=()=>{
        return {
            title:{
                text:'用户骑行订单对比',
            },
            legend:{
                data:['OFO订单量','摩拜订单量','小蓝订单量']
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'OFO订单量',
                    type:'line',
                    data:[1000,2300,2450,2800,3000,3300,3400]
                },{
                    name:'摩拜订单量',
                    type:'line',
                    data:[1200,2420,2655,2880,3260,3450,3600]
                },{
                    name:'小蓝订单量',
                    type:'line',
                    data:[1050,1230,1307,1400,1450,1560,1690]
                }
            ]
        };
    };
    getOption3=()=>{
        return {
            title:{
                text:'用户骑行订单对比',
            },
            legend:{
                data:['OFO订单量','摩拜订单量','小蓝订单量']
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                type : 'category',
                boundaryGap : false,
                data:['周一','周二','周三','周四','周五','周六','周日'],
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'OFO订单量',
                    type:'line',
                    areaStyle:{},
                    data:[1000,2300,2450,2800,3000,3300,3400]
                },{
                    name:'摩拜订单量',
                    type:'line',
                    areaStyle:{},
                    data:[1200,2420,2655,2880,3260,3450,3600]
                },{
                    name:'小蓝订单量',
                    type:'line',
                    areaStyle:{},
                    data:[1050,1230,1307,1400,1450,1560,1690]
                }
            ]
        };
    };
    render(){
        return (
            <div>
                <Card title="折线图一">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}}/>
                </Card>
                <Card title="折线图二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height:500}}/>
                </Card>
                <Card title="折线图三" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height:500}}/>
                </Card>
            </div>
        );
    }
}