import Inferno from 'inferno';
import Component from 'inferno-component';
import './youtube.css'
import Config from '../config'

/*eslint-disable */

class YouTube extends Component {
    player_instance;

    player_config = Config.youtube.player_config;

    componentDidMount() {
        this.onYoutubeReady()
    }

    onYoutubeReady = () => {
        if ((typeof YT !== "undefined") && YT && YT.Player) {
            this.initPlayer();
        } else {
            setTimeout(this.onYoutubeReady, 100);
        }
    };

    initPlayer() {
        this.player_instance = new YT.Player('player', {
            videoId: Config.youtube.id,
            playerVars: this.player_config,
            events: {'onReady': this.playerOnReady}
        });
    }

    playerOnReady = () => {
        this.player_instance.mute();
        this.player_instance.setPlaybackQuality(Config.youtube.quality);
        this.player_instance.setPlaybackRate(Config.youtube.speed);
    };

    render() {
        return (
            <div className="youtube">
                <div className="youtube" id="player"/>
            </div>
        );
    }
}

export default YouTube;

/*eslint-enable */