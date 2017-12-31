import Inferno from 'inferno';
import Component from 'inferno-component';

import './shout-out-input-camera.css'
import Camera from "../camera/camera";

class ShoutOutInputCamera extends Component {

    sendPicture = (img) => {
        this.props.onDone(img, 'picture')
    };

    render() {
        return (
            <div id="camera-container">
                <Camera takePicture={this.sendPicture}/>
            </div>
        );
    }
}

export default ShoutOutInputCamera