/*
*  引入createStore创建事件元素
* */
import {createStore} from 'redux';
import reducer from './../reducer';
export default ()=>createStore(reducer);