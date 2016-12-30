import Inferno from 'inferno';
import Component from 'inferno-component';

import Fireworks from '../fireworks/fireworks'

class HappyNewYear extends Component {

    componentDidMount() {
        this.setState({quote: this.getQuote()});

        setInterval(() => this.setState({quote: this.getQuote()}), this.props.refreshRate * 1000)
    }

    getQuote = () => this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)];

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
