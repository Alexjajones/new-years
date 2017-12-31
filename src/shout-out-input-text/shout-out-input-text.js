import Inferno from 'inferno';
import Component from 'inferno-component';

import "./shout-out-input-text.css";

class ShoutOutInputText extends Component {
    _handleKeyPress = (e) => {
        this.setState({value: e.target.value})
    };

    sendValue = () => {
        this.props.onDone(this.state.value, 'text');

        document.getElementById('shout-out-input').value = '';
    };

    render() {
        return (
            <div className="shout-out-input-inner">

                <input id="shout-out-input"
                       type="text"
                       onKeyUp={this._handleKeyPress}
                       placeholder="Shout out here"/>

                <button className="send-text" onClick={this.sendValue}>Send it</button>
            </div>
        );
    }
}

export default ShoutOutInputText;