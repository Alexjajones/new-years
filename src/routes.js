import Inferno from 'inferno';
import Component from 'inferno-component';
import {Router, Route, IndexRoute} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './app/app';
import ShoutOutInput from './shout-out-input/shout-out-input';
import Display from './display/display';
import AfterParty from './after-party/after-party';

var browserHistory = createBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ ShoutOutInput }/>
                    <Route path="/display" component={ Display }/>
                    <Route path="/after-party" component={ AfterParty }/>
                </Route>
            </Router>
        );
    }
}

export default Routes;