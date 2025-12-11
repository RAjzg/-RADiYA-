const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      OWNER INFO    
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 NAME         :〲 নূৰ নবী 卝 চৌধুৰী ཐི༏ཋྀ࿐
┃ 🚹 GENDER       :MALE 
┃ ❤️ RELATIONSHIP :N COMPLICATED
┃ 🎂 AGE          :21
┃ 🕌 RELIGION     :ISLAM
┃ 🏫 EDUCATION    :Diploma IN AGRiCULTURE 
┃ 🏡 ADDRESS      :RONGPUR KURIGRAM 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 TikTok       :〲 কারেন্ট 卝 সুন্দর ཐི༏ཋྀ࿐
┃ 🌐 FACEBOOK     : https://www.facebook.com/RAJA.ViP.5X.01715559179
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 UPDATED TiME : ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`"https://i.imgur.com/898hYKI.jpeg",`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
