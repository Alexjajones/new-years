import Inferno from 'inferno';
import Component from 'inferno-component';

class Camera extends Component {

    componentDidMount() {
        this.video = document.getElementById('video');

        navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
    }

    takePicture = () => {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');

        context.drawImage(this.video, 0, 0, 640, 480);

        this.props.takePicture(canvas.toDataURL('image/png'));
    };

    render() {
        return (
            <div>
                <video id="video" width="640" height="480" autoplay></video>
                <button id="snap" onClick={this.takePicture}>Snap Photo</button>
                <canvas id="canvas" width="640" height="480"></canvas>
            </div>
        );
    }
}

export default Camera;