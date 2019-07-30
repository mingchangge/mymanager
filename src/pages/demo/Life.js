import React from 'react';
import Child from './Child';
import './index.less';
import {Button} from 'antd';
// import 'antd/dist/antd.css';
export default class Life extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}
	};
	handleAdd=()=>{
		this.setState({
			count:this.state.count+1
		});
		console.log(this);
	};
	handleAdd2(){
		console.log(this);
	};
	//render(){},核心
	render(){
		return <div className='pad'>
			<p>React生命周期</p>
			<Button onClick={this.handleAdd}>点击一下</Button>
			<button onClick={this.handleAdd2.bind(this)}>点击一下</button>
			<p>{this.state.count}</p>
			<Child name={this.state.count}></Child>
	    </div>
	};
}