import React from 'react';
import {Card,Table,Modal,Button,message} from 'antd';
import Utils from './../../util/util';
import axios from './../../axios';
export default class BasicTable extends React.Component{
    state={};
    params={
        page:1
    };
    componentDidMount() {
        const dataSource=[
            {
            id:'0',
            userName:'Jack',
            sex:'1',
            state:'1',
            interest:'wu',
            birthday:'1992-05-16',
            address:'北京市',
            time:'8:30'
        },{
            id:'1',
            userName:'Tom',
            sex:'1',
            state:'1',
            interest:'wu',
            birthday:'1992-05-16',
            address:'北京市',
            time:'8:30'
        },{
            id:'2',
            userName:'Li',
            sex:'1',
            state:'1',
            interest:'wu',
            birthday:'1992-05-16',
            address:'北京市',
            time:'8:30'
        }
        ];
        //给dataSource赋予key值，防止报错
        dataSource.map((item,index)=>{
            item.key=index;
            return item;
        });
        this.setState({
            dataSource
        });
        this.request();
    }
//动态获取数据
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/table/list',
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
                    dataSource2:res.result.list,
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
//行点击获取值
    onRowClick=(record,index)=>{
        let selectKey=[index];
        Modal.info({
            title:'信息',
            content:`用户名${record.userName},用户爱好${record.interest}`
        });
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        });
    };
// 多选执行删除操作
    handleDelete=()=>{
        let rows=this.state.selectedRows;
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
            return ids;
        });
        Modal.info({
            title:'删除提示',
            content:`您确定要删除吗？${ids}`,
            onOk:()=>{
                message.success('删除成功');
            }
        });
    };
    render(){
        const columns=[
            {
            title:'id',
            dataIndex:'id'
        },{
            title:'用户名',
            dataIndex:'userName'
        },{
            title:'性别',
            dataIndex:'sex'
        },{
            title:'状态',
            dataIndex:'state'
        },{
            title:'爱好',
            dataIndex:'interest'
        },{
            title:'生日',
            dataIndex:'birthday'
        },{
            title:'地址',
            dataIndex:'address'
        },{
            title:'早起时间',
            dataIndex:'time'
        }
        ];
        const {selectedRowKeys}=this.state;
        const rowSelection={
            type:'radio',
            selectedRowKeys
        };
        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids=[];
                // selectedRows.map((item)=>{
                //     ids.push(item.id);
                // });
                this.setState({
                    selectedRowKeys,
                    selectedRows
                    // selectedIds:ids //不必须
                });
            }
        };
        return (
            <div>
                <Card title="基础表格">
                    <Table bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}/>
                </Card>
                <Card title="动态数据渲染表格" style={{margin:"10px 0"}}>
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dataSource2}
                           pagination={false}/>
                </Card>
                <Card title="Mock-单选" style={{margin:"10px 0"}}>
                    <Table bordered
                           rowSelection={rowSelection}
                           onRow={(record,index) => {
                               return {
                                   onClick: () => {
                                       this.onRowClick(record,index);
                                   }, // 点击行
                               };
                           }}
                           columns={columns}
                           dataSource={this.state.dataSource2}
                           pagination={false}/>
                </Card>
                <Card title="Mock-多选" style={{margin:"10px 0"}}>
                    <div style={{marginBottom:"10px"}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table bordered
                           rowSelection={rowCheckSelection}
                           onRow={(record,index) => {
                               return {
                                   onClick: () => {
                                       this.onRowClick(record,index);
                                   }, // 点击行
                               };
                           }}
                           columns={columns}
                           dataSource={this.state.dataSource2}
                           pagination={false}/>
                </Card>
                <Card title="Mock-表格分页" style={{margin:"10px 0"}}>
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dataSource2}
                           pagination={this.state.pagination}/>
                </Card>
            </div>
        );
    }
}