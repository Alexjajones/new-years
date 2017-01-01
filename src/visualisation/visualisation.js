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
            </div>
        );
    }
}

export default Visualisation;
