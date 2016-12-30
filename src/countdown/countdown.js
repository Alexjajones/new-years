import Inferno from 'inferno';
import Component from 'inferno-component';

class Countdown extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <div className="title">{this.props.timeRemaining}</div>
                    <div className="subtitle">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default Countdown;
