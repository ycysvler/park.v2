import React from 'react';
import {Layout, Menu, Button,Icon,Avatar} from 'antd';
import {HashRouter as Router,Link, Switch, Route} from 'react-router-dom';
import NotFound from '../notfound';
import './main.less';
import {Device} from '../device/index';


const SubMenu = Menu.SubMenu;
const {Header, Content, Sider} = Layout;

export default class CentrePlatform extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
    }

    render=()=> {
        return (
            <Layout className="main-root">
                <Header style={{height:64}} className="header">

                    <div className="logo" >
                        <Avatar style={{marginRight: 16}} size={60}
                                                   src="./icons/icon_logo.png"/>智慧园区管理平台</div>
                    <div style={{float: 'right'}}>
                        <Layout style={{"background": "white"}}>
                            <Content>
                                <Menu
                                    style={{flexGrow: 1, lineHeight:'62px'}}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="app">
                                        <Link to='/main/home'>景点游玩</Link>
                                    </Menu.Item>
                                    <Menu.Item key="01">
                                        <Link to='/main/device'>景区设施</Link>
                                    </Menu.Item>
                                    <Menu.Item key="02">
                                        <Link to='/main/face'>视频监控</Link>
                                    </Menu.Item>
                                    <Menu.Item key="03">
                                        <Link to='/main/business'>停车场</Link>
                                    </Menu.Item>
                                    <Menu.Item key="04">
                                        <Link to='/main/business'>环境监控</Link>
                                    </Menu.Item>
                                    <Menu.Item key="05">
                                        <Link to='/main/business'>客流分析</Link>
                                    </Menu.Item>
                                    <Menu.Item key="06">
                                        <Link to='/main/business'>基础数据</Link>
                                    </Menu.Item>
                                    <Menu.Item key="07">
                                        <Link to='/main/system'>系统设置</Link>

                                    </Menu.Item>
                                </Menu>
                            </Content>
                            <Sider width={160} className="box"
                                   style={{background: '#fff', height: '64px', justifyContent: 'flex-end'}}>
                                <Button style={{"background": "#fff", "border": "none"}} icon="question-circle-o"
                                        size="small" className="header-help">帮助</Button>
                            </Sider>
                        </Layout>
                    </div>
                </Header>
                <Layout >
                    <Router>
                        <Switch>
                            <Route strict path="/main/device" component={Device}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </Layout>
            </Layout>
        );
    }
}

