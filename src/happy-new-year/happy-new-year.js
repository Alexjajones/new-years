import Inferno from 'inferno';
import Component from 'inferno-component';
import Config from '../config'

import Fireworks from '../fireworks/fireworks'

class HappyNewYear extends Component {

    componentDidMount() {
        this.setState({quote: this.getRandomQuote()});

        setInterval(() => this.setState({quote: this.getRandomQuote()}), Config.quotes.refreshRate * 1000)
    }

    getRandomQuote = () => Config.quotes.items[Math.floor(Math.random() * Config.quotes.items.length)];

    render() {
        return (
            <div className="container">
                <Fireworks/>
                <div>
                    <div className="title">Happy New Year!</div>
                    <div className="subtitle">#{this.state.quote}</div>
                </div>
            </div>
        );
    }
}

export default HappyNewYear;
