import Inferno from 'inferno';
import Component from 'inferno-component';
import Firebase from '../firebase/firebase';

import Config from '../config';
import ShoutOutInputText from '../shout-out-input-text/shout-out-input-text';
import ShoutOutInputCamera from '../shout-out-input-camera/shout-out-input-camera';

import './shout-out-input.css';

// ignore this file
class ShoutOutInput extends Component {
    state = {showing: 'default'};

    componentWillMount() {
        this.workstation = !!this.getUrlVar().workstation;

        this.setState({workstation: this.workstation, showing: this.workstation ? null : 'text'})
    }

    getUrlVar() {
        var result = {};
        var location = window.location.href.split('#');
        var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            result [key] = value;
        });
        return result;
    }

    sendShoutOut = (text, type) => {
        if (text) {
            Firebase.database.ref(Config.shoutOut.namespace)
                .push({text, type});

            this.setState({showing: this.workstation ? null : 'text'})
        }
    };

    showPicture = () => this.setState({showing: 'picture'});
    showText = () => this.setState({showing: 'text'});

    render() {

        return (
            <div className="content">
                <div className="container shout-out-input">
                    {this.state.workstation && (
                        <div className="tool-bar">
                            <button onClick={this.showPicture}>Take Picture</button>
                            <button onClick={this.showText}>Write Text</button>
                        </div>
                    )}
                    <div className="shout-out-input-inner">
                        {this.state.showing === 'picture' && (<ShoutOutInputCamera onDone={this.sendShoutOut}/>)}
                        {this.state.showing === 'text' && (<ShoutOutInputText onDone={this.sendShoutOut}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoutOutInput;
