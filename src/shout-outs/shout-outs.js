import Inferno from 'inferno';
import Component from 'inferno-component';
import Firebase from '../firebase/firebase'
import Config from '../config'

import './shout-outs.css'

class ShoutOuts extends Component {
    previousId;

    componentDidMount() {
        this.initDatabaseConnection();
        this.initShoutOutQueue();
    }

    initDatabaseConnection() {
        var shoutOutsRef = Firebase.database.ref(Config.shoutOut.namespace);

        shoutOutsRef.on('value', snapshot =>
            this.setState({shoutouts: this.processRes(snapshot.val())})
        );
    }

    initShoutOutQueue() {
        setInterval(() => this.getShoutOut(), Config.shoutOut.refreshRate * 1000)
    }

    processRes = (sos) => Object.keys(sos)
        .map(id => Object.assign({}, sos[id], {id}))
        .filter(item => !item.seen);

    getShoutOut = () => {
        if (this.state.shoutouts.length) {

            var shout = this.state.shoutouts[0];

            this.setState({shoutout: <div className="shout-outs">{shout.text}</div>});

            this.updateSeenState(shout);
        }
        else {
            this.setState({shoutout: ''})
        }
    };

    updateSeenState(shout) {
        Firebase.database.ref(Config.shoutOut.namespace + '/' + this.previousId)
            .set({seen: true, text: shout.text});

        this.previousId = shout.id;
    }

    render() {
        return (
            <div>
                {this.state.shoutout}
            </div>
        );
    }
}

export default ShoutOuts;
