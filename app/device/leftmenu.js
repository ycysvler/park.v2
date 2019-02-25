/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Layout,  Tabs} from 'antd';



export class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    callback = (key) => {
        this.props.onTabChange(key);
    }

    isActive=(path)=>{
        return window.location.href.indexOf(path) > -1;
    }

    render() {

        return (<div className='leftmenu'>

                <div className='menu'>
                    <div style={{display:"flex", borderBottom:'solid 1px #E3E3E3',paddingLeft:8,marginBottom:16}}>
                        <Link className="link" to="/main/home/alarm">
                            <div className="menubar" style={{background:this.isActive("/main/home/alarm")?'#296FD2':'#fff'}}></div>
                            <span style={{color:this.isActive("/main/home/alarm")?'#296FD2':'#4A4A4A'}}>警情</span>
                            <div className="menuline"></div>
                        </Link>
                        <Link className="link" to="/main/home/police">
                            <div className="menubar" style={{background:this.isActive("/main/home/police")?'#296FD2':'#fff'}}></div>
                            <span style={{color:this.isActive("/main/home/police")?'#296FD2':'#4A4A4A'}}>警员</span>
                            <div className="menuline"></div>
                        </Link>
                        <Link className="link" to="/main/home/station">
                            <div className="menubar" style={{background:this.isActive("/main/home/station")?'#296FD2':'#fff'}}></div>
                            <span style={{color:this.isActive("/main/home/station")?'#296FD2':'#4A4A4A'}}>警所</span>
                            <div className=""></div>
                        </Link>
                    </div>

                </div>

            </div>

        );
    }
}