import React from 'react';
import {Card} from 'antd';
import echartTheme from './../echartTheme';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
export default class Bar extends React.Component{
    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    };
    getOption=()=>{
        return   {
            title:{
                text:'用户骑行订单',
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
                    name:'订单量',
                    type:'bar',
                    data:[1000,3000,2300,2800,3300,2450,1000]
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
                data:['OFO','摩拜','小蓝']
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
                    name:'OFO',
                    type:'bar',
                    data:[1000,2300,2450,2800,3000,3300,3400]
                },{
                    name:'摩拜',
                    type:'bar',
                    data:[2000,2450,2322,2840,3400,2750,1200]
                },{
                    name:'小蓝',
                    type:'bar',
                    data:[1050,1230,1307,1400,1300,1450,1090]
                }
            ]
        };
    };
    render(){
        return (
            <div>
                <Card title="柱形图1">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}}/>
                </Card>
                <Card title="柱形图2" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height:500}}/>
                </Card>
            </div>
        );
    }
}