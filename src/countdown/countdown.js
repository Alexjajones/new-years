import Inferno from 'inferno';
import Component from 'inferno-component';
import Config from '../config'

class Countdown extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <div className="title">{this.props.timeRemaining}</div>
                    <div className="subtitle">{Config.countdown.text}</div>
                </div>
            </div>
        );
    }
}

export default Countdown;
