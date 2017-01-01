# New years

- Simple new years countdown created using Infernojs that was used at the Scott 2016/17 garage party. 
- Displays a visualisation until 60 seconds before new years. 
- Counts down the last 60 seconds and displays a happy new year page with custom quotes.
- After 10 minutes the visualisation screen comes back for the rest of the night.
- Can be access over the local network via browser-sync.
- Party goers can visit the home page and enter shoutouts that will be displayed over the top of the visualisation.

# Usage

This depends on nodejs, so make sure you have it installed. You will also need to set up a firebase account.

- pull repo
- cd new-years
- npm install
- replace firebase details with yours within /config.js towards the bottom.
- npm run build
- npm run expose
- read the output from the previous command and locate the first 'External' refernece, e.g. External: http://***.***.*.***:1337.
- navigate to that using a browser.
