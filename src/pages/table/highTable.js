import React from 'react';
import {Card,Table,Modal,Button,message,Badge} from 'antd';
import Utils from './../../util/util';
import axios from './../../axios';
export default class highTable extends React.Component{
    state={};
    params={
        page:1
    };
    componentDidMount() {
        this.request();
    }
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/table/high/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code==="0"){
                //给res赋予key值，防止报错
                res.result.list.map((item,index)=>{
                    item.key=index;
                    return item;
                });
                this.setState({
                    dataSource:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page=current;
                        this.request();
                    })
                });
            }
        });
    };
    handleChange=(pagination, filters, sorter)=>{
        this.setState({
            sortOrder:sorter.order
        });
    };
    //删除操作
    handleDelete=(item)=>{
        let ids=item.id;
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除吗？${ids}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        });
    };
    render(){
        const columns=[
            {
                title:'id',
                dataIndex:'id',
                width:80
            },{
                title:'用户名',
                dataIndex:'userName',
                width:80
            },{
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex===1?'男':'女'
                }
            },{
                title:'状态',
                dataIndex:'state',
                width:80
            },{
                title:'爱好',
                dataIndex:'interest',
                width:120,
                render(abc){
                    let config={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'阅读',
                        '4':'散步',
                        '5':'唱歌',
                        '6':'跳舞',
                        '7':'太极',
                        '8':'骑行'
                    };
                    return config[abc];
                }
            },{
                title:'生日',
                dataIndex:'birthday',
                width:120
            },{
                title:'地址',
                dataIndex:'address',
                width:120
            },{
                title:'早起时间',
                dataIndex:'time',
                width:80
            }
        ];
        const columns2=[
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },{
                title:'用户名',
                dataIndex:'userName',
                width:80,
                fixed:'left'
            },{
                title:'性别',
                dataIndex:'sex',
                width:80
            },{
                title:'状态',
                dataIndex:'state',
                width:80
            },{
                title:'爱好',
                dataIndex:'interest',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday1',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday2',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday3',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday4',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday5',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday11',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday6',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday7',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday8',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday9',
                width:120
            },{
                title:'生日',
                dataIndex:'birthday10',
                width:120
            },{
                title:'地址',
                dataIndex:'address',
                width:120,
                fixed:'right'
            },{
                title:'早起时间',
                dataIndex:'time',
                width:80,
                fixed:'right'
            }
        ];
        const columns3=[
            {
                title:'id',
                dataIndex:'id'
            },{
                title:'用户名',
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女'
                }
            },{
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                sortOrder:this.state.sortOrder
            },{
                title:'状态',
                dataIndex:'state',
            },{
                title:'爱好',
                dataIndex:'interest',
                render(abc){
                    let config={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'阅读',
                        '4':'散步',
                        '5':'唱歌',
                        '6':'跳舞',
                        '7':'太极',
                        '8':'骑行'
                    };
                    return config[abc];
                }
            },{
                title:'生日',
                dataIndex:'birthday',
            },{
                title:'地址',
                dataIndex:'address',
            },{
                title:'早起时间',
                dataIndex:'time',
            }
        ];
        const columns4=[
            {
                title:'id',
                dataIndex:'id'
            },{
                title:'用户名',
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女'
                }
            },{
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                sortOrder:this.state.sortOrder
            },{
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':<Badge status="success" text="成功"/>,
                        '2':<Badge status="error" text="错误"/>,
                        '3':<Badge status="default" text="默认"/>,
                        '4':<Badge status="processing" text="进行中"/>,
                        '5':<Badge status="warning" text="警告"/>
                    };
                    return config[state];
                }
            },{
                title:'爱好',
                dataIndex:'interest',
                render(abc){
                    let config={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'阅读',
                        '4':'散步',
                        '5':'唱歌',
                        '6':'跳舞',
                        '7':'太极',
                        '8':'骑行'
                    };
                    return config[abc];
                }
            },{
                title:'生日',
                dataIndex:'birthday',
            },{
                title:'地址',
                dataIndex:'address',
            },{
                title:'早起时间',
                dataIndex:'time',
            },{
                title:'操作',
                dataIndex:'cz',
                render:(item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ];
        return (
            <div>
                <Card title="头部固定">
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dataSource}
                           pagination={false}
                           scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin:"10px 0"}}>
                    <Table bordered
                           columns={columns2}
                           dataSource={this.state.dataSource}
                           pagination={false}
                           scroll={{x:1970}}
                    />
                </Card>
                <Card title="表格排序" style={{margin:"10px 0"}}>
                    <Table bordered
                           columns={columns3}
                           dataSource={this.state.dataSource}
                           pagination={false}
                           scroll={{x:1970}}
                           onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{margin:"10px 0"}}>
                    <Table bordered
                           columns={columns4}
                           dataSource={this.state.dataSource}
                           pagination={false}
                    />
                </Card>
            </div>
        );
    }
}