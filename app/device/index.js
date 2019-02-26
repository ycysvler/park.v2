import React from 'react';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
import {Layout, Avatar, Modal, Button} from 'antd';
import {LeftMenu} from "./leftmenu";
import MapInit from './mapinit';
import ParkMarker from './marker';
import './index.less';

export class Device extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {lng: 116.306857, lat: 40.012762},
            active_alarm: null,
            active_police: null,
            active_station: null,
            create_alarm: false,
            create_police: false,
            create_station: false,
            alarms: [],
            polices: [],
            stations: [],
            question:{
                show:true,
                items:[{id:'question_001', lng: 116.318283, lat: 40.006255},{id:'question_002', lng: 116.321732, lat: 40.012293}]
            },
            car:{
                show:true,
                items:[{id:'car_001', lng: 116.31045, lat: 40.006573},{id:'car_002', lng: 116.315031, lat: 40.005495},{id:'car_002', lng: 116.320044, lat: 40.007056}]
            },
            insurance:{
                show:true,
                items:[{id:'insurance_001', lng: 116.303066, lat: 40.010552},{id:'insurance_002', lng: 116.323385, lat: 40.008272},{id:'insurance_003', lng: 116.307306, lat: 40.008383}]
            },
            alert:{
                show:true,
                items:[{id:'alert_001', lng: 116.312444, lat: 40.008977}]
            },
            coffee:{
                show:true,
                items:[{id:'coffee_001', lng: 116.316989, lat: 40.018026}]
            },
            sound:{
                show:true,
                items:[{id:'sound_001', lng: 116.307827, lat: 40.013591}]
            },
            service:{
                show:true,
                items:[{id:'service_001', lng: 116.306946, lat: 40.01268}]
            },
            youtube:{
                show:true,
                items:[{id:'youtube_001', lng: 116.314456, lat: 40.01739}]
            },
            laptop:{
                show:true,
                items:[{id:'laptop_001', lng: 116.315696, lat: 40.012666}]
            },
            wc:{
                show:true,
                items:[{id:'wc_001', lng: 116.317061, lat: 40.011022}]
            },
            project:{
                show:true,
                items:[{id:'wc_001', lng: 116.302994, lat: 40.01337}]
            },
            wifi:{
                show:true,
                items:[{id:'alert_001', lng: 116.320205, lat: 40.010939}]
            },
            shop:{
                show:true,
                items:[{id:'shop_001', lng: 116.308348, lat: 40.0104},{id:'shop_002', lng: 116.323385, lat: 40.008272},{id:'shop_003', lng: 116.307306, lat: 40.008383}]
            },
            idcard:{
                show:true,
                items:[{id:'idcard_001', lng: 116.307647, lat: 40.011215},{id:'idcard_002', lng: 116.315929, lat: 40.00555}]
            }
        };
    }

    render() {
        let self = this;
        return (<Layout className="home">
                <Map style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                     center={{lng: self.state.center.lng, lat: self.state.center.lat}} zoom="17">
                    <MapInit/>
                    {
                        // 游客服务中心
                        this.state.question.show ? this.state.question.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="question" />
                                </Marker>
                            }):null
                    }
                    {
                        // 停車場
                        this.state.car.show ? this.state.car.items.map((item)=>{
                            return <Marker key={item.id}
                                    position={{lng: item.lng, lat: item.lat}}>
                                <ParkMarker type="car" />
                            </Marker>
                        }):null
                    }
                    {
                        // 保安
                        this.state.insurance.show ? this.state.insurance.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="insurance" />
                                </Marker>
                            }):null
                    }
                    {
                        // 報警
                        this.state.alert.show ? this.state.alert.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="alert" />
                                </Marker>
                            }):null
                    }

                    {
                        // wifi
                        this.state.wifi.show ? this.state.wifi.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="wifi" />
                                </Marker>
                            }):null
                    }
                    {
                        // 茶室/咖啡
                        this.state.coffee.show ? this.state.coffee.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="coffee" />
                                </Marker>
                            }):null
                    }
                    {
                        // 智能广播
                        this.state.sound.show ? this.state.sound.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="sound" />
                                </Marker>
                            }):null
                    }
                    {
                        // 语音导游
                        this.state.service.show ? this.state.service.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="service" />
                                </Marker>
                            }):null
                    }
                    {
                        // 大屏导览
                        this.state.youtube.show ? this.state.youtube.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="youtube" />
                                </Marker>
                            }):null
                    }
                    {
                        // 互动屏幕
                        this.state.laptop.show ? this.state.laptop.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="laptop" />
                                </Marker>
                            }):null
                    }
                    {
                        // 卫生间
                        this.state.wc.show ? this.state.wc.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="wc" />
                                </Marker>
                            }):null
                    }
                    {
                        // 景区管道
                        this.state.project.show ? this.state.project.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="project" />
                                </Marker>
                            }):null
                    }
                    {
                        // 商店
                        this.state.shop.show ? this.state.shop.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="shop" />
                                </Marker>
                            }):null
                    }
                    {
                        // 票务服务
                        this.state.idcard.show ? this.state.idcard.items.map((item)=>{
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="idcard" />
                                </Marker>
                            }):null
                    }
                </Map>

                <LeftMenu />

            </Layout>
        );
    }
}
