import Inferno from 'inferno';
import Component from 'inferno-component';
import ShoutOuts from '../shout-outs/shout-outs';
import YouTube from '../youtube/youtube';

class Visualisation extends Component {

    render() {
        return (
            <div className="container">
                <YouTube/>
                <ShoutOuts/>
                <div style="position: absolute;left: 30px; bottom: 30px; font-size: 20px;">http://bit.do/fairfield18</div>
            </div>
        );
    }
}

export default Visualisation;
