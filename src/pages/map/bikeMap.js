import React from 'react';
import { Card} from 'antd';
import axios from '../../axios';
import BaseForm from '../../components/BaseForm';
export default class User extends React.Component{
    state={};
    map='';
    formList = [
        {
            type:'城市',
            width:80,
            initialValue:'0'
        },
        {
            type: '时间查询'
        },
        {
            type: 'SELECT',
            label: '订单状态',
            field:'order_status',
            placeholder: '全部',
            initialValue: '0',
            width: 80,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
        }
    ];
    componentDidMount(){
        this.requestList();
    };
    //查询表单
    handleFilterSubmit=(filterParams)=>{
        this.params=filterParams;
        this.requestList();
    };
    requestList=()=>{
        axios.ajax({
            url:'/map/bike_list',
            data:{params:this.params}
        }).then((res)=>{
            if(res.code===0){
                this.setState({
                    total_count:res.result.total_count
                });
                this.renderMap(res);
            }
        });
    };
    //渲染地图数据
    renderMap=(res)=>{
        let list=res.result.route_list;
        this.map=new window.BMap.Map('container');
        let start=list[0].split(',');
        let startPoint=new window.BMap.Point(start[0],start[1]);
        let end=list[list.length-1].split(',');
        let endPoint=new window.BMap.Point(end[0],end[1]);
        this.map.centerAndZoom(endPoint,11);
        let startIcon=new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,42)
        });
        let bikeMarkerStart=new window.BMap.Marker(startPoint,{icon:startIcon});
        this.map.addOverlay(bikeMarkerStart);
        let endIcon=new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,42)
        });
        let bikeMarkerEnd=new window.BMap.Marker(endPoint,{icon:endIcon});
        this.map.addOverlay(bikeMarkerEnd);
        //绘制车辆行驶路线
        let routeList=[];
        list.forEach((item)=>{
            let p=item.split(',');
            routeList.push(new window.BMap.Point(p[0],p[1]));
        });
        let polyLine=new window.BMap.Polyline(routeList,{
            strokeColor:'#ef4136',
            strokeWeight:3,
            strokeOpacity:1
        });
        this.map.addOverlay(polyLine);
    //    绘制服务区
        let servicePoint=[];
        let serviceList=res.result.service_list;
        serviceList.forEach((item)=>{
            servicePoint.push(new window.BMap.Point(item.lon,item.lat));
        });
        let polyServiceLine=new window.BMap.Polyline(servicePoint,{
            strokeColor:'green',
            strokeWeight:3,
            strokeOpacity:1
        });
        this.map.addOverlay(polyServiceLine);
    //    添加地图中的自行车图标
        let bikeList=res.result.bike_list;
        let bikeIcon=new window.BMap.Icon('/assets/bike.jpg',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,42)
        });
        bikeList.forEach((item)=>{
            let p=item.split(',');
            let point=new window.BMap.Point(p[0],p[1]);
            let bikeMarker=new window.BMap.Marker(point,{icon: bikeIcon});
            this.map.addOverlay(bikeMarker);
        });
    };
    render() {
        return(
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
                </Card>
                <Card style={{marginTop:10}} className="operate-wrap">
                    <div>共{this.state.total_count}辆车</div>
                    <div id="container" style={{height:500}}>

                    </div>
                </Card>
                {/*<div className="content-wrap">
                    <ETable
                        columns={columns}
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        selectedRowKeys={this.state.selectedRowKeys}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>*/}
            </div>);
    }
}
