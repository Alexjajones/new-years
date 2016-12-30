import Inferno from 'inferno';
import Component from 'inferno-component';
import './app.css';

import Config from '../config'

import Stars from '../stars/stars';
import Switcher from '../switcher/switcher';

import moment from 'moment'

class App extends Component {

    componentDidMount() {
        this.setState({timeRemaining: this.calcTimeRemaining()});

        setInterval(() => this.setState({timeRemaining: this.calcTimeRemaining()}), 100)
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
            <div className="app">
                <Stars/>
                <Switcher timeRemaining={this.state.timeRemaining}/>
            </div>
        );
    }
}

export default App;
