import Inferno from 'inferno';
import Component from 'inferno-component';
import './app.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

export default App;
