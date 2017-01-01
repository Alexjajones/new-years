import Inferno from 'inferno';
import Component from 'inferno-component';
import './app.css';
import Stars from '../stars/stars';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Stars/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
