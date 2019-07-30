import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import About from './About';
import Topics from './Topics';
export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About} />
                        </Main>
                    }/>
                    <Route exact={true} path="/about" component={About} />
                    <Route exact={true} path="/topics" component={Topics} />
                </Home>
            </Router>
        );
    };
}