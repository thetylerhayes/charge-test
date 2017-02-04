const Crypto = require('crypto');
const moment = require('moment');

const TTL = 24 * 60 * 60;

//the bebo gods have blessed you with 23 coins. You can !pray once every 24hrs

class SegaBot {

  constructor(sdk) {
    this.sdk = sdk;

    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(user_state, argument) {
    const value = (Crypto.randomBytes(1)[0] % 35) + 15; // 15 ~ 50
    this.sdk.sendMessage(`Sega!`);

    this.sdk.cache.get(user_state.username, { global: true })
    .then((last_try) => {
      if (last_try) {
        return Promise.reject(`You can only pray for coins once every 24 hours. Stay #Blessed Children of Twitch`);
      }

      const ttl_millis = TTL * 1000;
      return this.sdk.cache.set(user_state.username, (Date.now() + ttl_millis), { ttl: TTL, global: true })
    }).then(() => {
      return this.sdk.addPoints(user_state.username, value);
    }).then(() => {
      //this.sdk.sendMessage(`${user_state.username}, the bebo gods have blessed you with ${value} coins. You can !pray once every 24hrs!`);
      this.sdk.sendMessage(`Sega!`);
    }).catch((e) => {
      this.sdk.sendWhisper(user_state.username, `You can only pray for coins once every 24 hours. Stay #Blessed Children of Twitch`);
    });
  }
}

export default SegaBot;
