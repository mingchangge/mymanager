import React from 'react';
export default class Child extends React.Component{
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
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will props'+nextProps)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update');
        return true; //必须有这句
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update');
    }

    render(){
        let sty={padding:30};
        return <div style={sty}>
            <p>测试子组件生命周期</p>
            <p>{this.props.name}</p>
        </div>
    };
}