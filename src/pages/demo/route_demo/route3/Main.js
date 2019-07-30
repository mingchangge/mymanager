import React from 'react';
import {Link} from 'react-router-dom';
export default class Main extends React.Component{
    render(){
        return (
                <div>
                    main
                    <Link to="/main/test-id1">嵌套路由1</Link>
                    <Link to="/main/test-id2">嵌套路由2</Link>
                    <Link to="/main/test-id3">嵌套路由3</Link>
                    <hr/>
                    {this.props.children}
                </div>
        );
    };
}