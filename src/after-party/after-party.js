import Inferno from 'inferno';
import Component from 'inferno-component';
import './after-party.css';
import Firebase from '../firebase/firebase';

import Config from '../config';

class AfterParty extends Component {

    constructor() {
        super();

        var shoutOutsRef = Firebase.database.ref(Config.shoutOut.namespace);

        shoutOutsRef.on('value', snapshot => this.setState({shoutouts: snapshot.val()}));
    }

    generateShoutOutList = () => {
        var listItems = [];

        for (var id in this.state.shoutouts) {
            listItems.push(<li>{this.state.shoutouts[id].text}</li>)
        }

        return listItems;
    };

    render() {
        return (
            <div className="after-party content container">
                <ui>
                    {this.generateShoutOutList()}
                </ui>
            </div>
        );
    }
}

export default AfterParty;
