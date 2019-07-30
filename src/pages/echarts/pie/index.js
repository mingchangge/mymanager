import React from 'react';
import {Card} from 'antd';
import echartTheme from './../echartTheme';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
export default class Pie extends React.Component{
    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    };
    getOption=()=>{
        return   {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    data:[
                        {
                            value:1000,
                            name:'周一'
                        },{
                            value:3000,
                            name:'周二'
                        },{
                            value:2300,
                            name:'周三'
                        },{
                            value:2800,
                            name:'周四'
                        },{
                            value:3300,
                            name:'周五'
                        },{
                            value:2450,
                            name:'周六'
                        },{
                            value:1000,
                            name:'周日'
                        }]
                }
            ]
        };
    };
    getOption2=()=>{
        return   {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    radius:['50%','80%'],
                    center:['50%','60%'],
                    data:[
                        {
                            value:1000,
                            name:'周一'
                        },{
                            value:3000,
                            name:'周二'
                        },{
                            value:2300,
                            name:'周三'
                        },{
                            value:2800,
                            name:'周四'
                        },{
                            value:3300,
                            name:'周五'
                        },{
                            value:2450,
                            name:'周六'
                        },{
                            value:1000,
                            name:'周日'
                        }]
                }
            ]
        };
    };
    getOption3=()=>{
        return   {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    data:[
                        {
                            value:1000,
                            name:'周一'
                        },{
                            value:3000,
                            name:'周二'
                        },{
                            value:2300,
                            name:'周三'
                        },{
                            value:2800,
                            name:'周四'
                        },{
                            value:3300,
                            name:'周五'
                        },{
                            value:2450,
                            name:'周六'
                        },{
                            value:3400,
                            name:'周日'
                        }].sort((a,b)=>{
                            return a.value-b.value
                    }),
                    roseType: 'radius',
                }
            ]
        };
    };
    render(){
        return (
            <div>
                <Card title="饼图">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}}/>
                </Card>
                <Card title="环形图" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height:500}}/>
                </Card>
                <Card title="南丁格尔图" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height:500}}/>
                </Card>
            </div>
        );
    }
}