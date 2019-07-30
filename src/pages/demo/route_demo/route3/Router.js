import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Main from './Main';
import About from './About';
import Topics from './Topics';
import NoMatch from './NoMatch';
export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route exact={true} path="/main/:id" component={Info} />
                            </Main>
                        }/>
                        <Route exact={true} path="/about" component={About} />
                        <Route exact={true} path="/topics" component={Topics} />
                        <Route component={NoMatch} />
                    </Switch>
                </Home>
            </Router>
        );
    };
}