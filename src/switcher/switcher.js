import Inferno from 'inferno';
import Component from 'inferno-component';

import Config from '../config'

import Visualisation from '../visualisation/visualisation';
import Countdown from '../countdown/countdown';
import HappyNewYear from '../happy-new-year/happy-new-year';

class Switcher extends Component {

    switcher(timeRemaining) {
        var switch_conf = Config.switcher;

        if (timeRemaining <= switch_conf.countDown.start && timeRemaining >= switch_conf.countDown.end) {
            return <Countdown timeRemaining={this.props.timeRemaining}/>
        }
        else if (timeRemaining <= switch_conf.final.start && timeRemaining > switch_conf.final.end) {
            return <HappyNewYear/>
        }
        else {
            return <Visualisation/>
        }
    }

    render() {
        return (
            <div className="content">
                {this.switcher(this.props.timeRemaining)}
            </div>
        );
    }
}

export default Switcher;
