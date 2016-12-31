import Inferno from 'inferno';
import Component from 'inferno-component';
import './youtube.css'

/*eslint-disable */

class YouTube extends Component {
    player_instance;

    player_config = {
        controls: 0,
        showinfo: 0,
        loop: 1,
        playlist: this.props.video_id,
        rel: 0,
        iv_load_policy: 3,
        autoplay: 1,
        start: 1,
        end: 19980
    };

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
            videoId: this.props.video_id,
            playerVars: this.player_config,
            events: {'onReady': this.playerOnReady}
        });
    }

    playerOnReady = () => {
        this.player_instance.mute();
        this.player_instance.setPlaybackQuality('hd1080');
        this.player_instance.setPlaybackRate(1.5);
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