import Inferno from 'inferno';
import Component from 'inferno-component';
import moment from 'moment'

import Config from '../config'

import Switcher from '../switcher/switcher';

class Display extends Component {

    componentDidMount() {
        this.setState({timeRemaining: this.calcTimeRemaining()});

        setInterval(() => this.setState({timeRemaining: this.calcTimeRemaining()}), 500)
    }

    calcTimeRemaining = () => {
        var now = moment(new Date());
        var end = moment(Config.countdown.to);

        var duration = moment.duration(end.diff(now));

        var seconds = duration.asSeconds();

        return seconds.toFixed(0)
    };

    render() {
        return (
            <div className="display">
                <Switcher timeRemaining={this.state.timeRemaining}/>
            </div>
        );
    }
}

export default Display;
