import Inferno from 'inferno';
import Component from 'inferno-component';
import Firebase from '../firebase/firebase'

import Config from '../config'

import './shout-out-input.css'

class ShoutOutInput extends Component {

    sendShoutOut = () => {
        if (this.state.value) {

            Firebase.database.ref(Config.shoutOut.namespace)
                .push({text: this.state.value});

            document.getElementById('shout-out-input').value = ""
        }
    };

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.sendShoutOut();
        }
        else {
            this.setState({value: event.target.value});
        }
    };

    render() {
        return (
            <div className="content">
                <div className="container shout-out-input">
                    <div className="shout-out-input-inner">

                        <input id="shout-out-input"
                               type="text"
                               onKeyUp={this._handleKeyPress}
                               placeholder="Shout out here"/>

                        <button onClick={this.sendShoutOut}>Send it</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoutOutInput;
