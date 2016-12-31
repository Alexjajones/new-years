import moment from 'moment'

var config = {
    countdown: {
        to: '2017/01/01',
        // to: moment().add(65, 'seconds'),
        text: 'Seconds until 2017'
    },
    youtube: {
        id: '5fZT4dnkXM8'
    },
    quotes: [
        'doesbenhaveagf?',
        'gaypride',
        'votetrump',
        'newyearnewme',
    ],
    quoteRefreshRate: 7,
    switcher: {
        countDown: {
            start: 60,
            end: 1
        },
        final: {
            start: 0,
            end: -600
            // end: -6
        }
    }
};

export default config;