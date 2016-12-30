import Inferno from 'inferno';
import Component from 'inferno-component';
import './fireworks.css';

class Fireworks extends Component {

    render() {
        return (
            <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
        );
    }
}

export default Fireworks;
