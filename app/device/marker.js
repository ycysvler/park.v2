/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {Popover, Modal, Icon} from 'antd';

export default class ParkMarker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false, dialog_visibility: false, active: this.props.active};
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    onClick = () => {
        this.setState({dialog_visibility: !this.state.dialog_visibility});
    }

    showInfo = (event) => {
        this.setState({dialog_visibility:false, visible: true});
    }

    handleCancel = (e) => {
        this.setState({dialog_visibility:false,visible: false});
    }

    content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    render() {
        let icon = "./icons/marker_mic.png";


        return (
            <div  className="marker">
                <div className="img">
                    <Popover
                        title={null} visible={this.state.dialog_visibility}
                        content={
                            <div className="marker">

                            </div>
                        } >
                        <div className="bg">
<img src={icon} />
                        </div>

                    </Popover>

                </div>


                <Modal width={388}
                       title="警情" footer={null}
                       visible={this.state.visible}
                >
                    <div className="alarmnav">
                    </div>
                </Modal>

            </div>
        );
    }
}