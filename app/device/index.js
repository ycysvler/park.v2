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
            stations: []
        };
    }

    render() {
        let self = this;
        return (<Layout className="home">

                <Map style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                     center={{lng: self.state.center.lng, lat: self.state.center.lat}} zoom="17">
                    <MapInit/>

                    <Marker key={"33"}
                            position={{lng: 116.306857, lat: 40.012762}}>
<ParkMarker />
                    </Marker>
                </Map>

                <LeftMenu />

            </Layout>
        );
    }
}
