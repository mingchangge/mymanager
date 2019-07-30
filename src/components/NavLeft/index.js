import React from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';
import {connect} from 'react-redux';
import {switchMenu} from './../../redux/action';
import './index.less'
const SubMenu=Menu.SubMenu;
class NavLeft extends React.Component{
    state={
        currentKey:'',
    };
    componentWillMount() {
        const menuTree=this.renderMenu(MenuConfig);
        let currentKey=window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            currentKey,
            menuTreeNode:menuTree
        });
    };
    handleClick=({item,key})=>{
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        this.setState({
            currentKey: key
        });
    };
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        });
    };
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={this.state.currentKey}
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft);