import React from 'react';
import {Card,Button,notification} from 'antd';
import './ui.less';
export default class Notice extends React.Component{
    openNotification=(type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            });
        }
        notification[type]({
            message:"啥也没有",
            description:"逗你玩！"
        });
    };
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error','bottomLeft')}>Error</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning','bottomRight')}>Warning</Button>
                </Card>

            </div>
        );
    };
}