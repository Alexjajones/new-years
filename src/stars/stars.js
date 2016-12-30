import Inferno from 'inferno';
import Component from 'inferno-component';
import './stars.css';

class Stars extends Component {

    render() {
        return (
            <div className="stars">
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>
        );
    }
}

export default Stars;
