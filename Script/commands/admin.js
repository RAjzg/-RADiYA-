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
┃      𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐀𝐌𝐄        :〲𝐌𝐃: 𝐍𝐔𝐑𝐍𝐎𝐁𝐈 𝐇𝐀𝐐𝐔𝐄ཐི༏ཋྀ࿐
┃ 🚹 𝐆𝐄𝐍𝐃𝐄𝐑      :𝐌𝐀𝐋𝐄
┃ ❤️ 𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏 : 𝐒𝐈𝐍𝐆𝐋𝐄
┃ 🎂 𝐀𝐆𝐄          :20
┃ 🕌 𝐑𝐄𝐋𝐈𝐎𝐍       :𝐈𝐒𝐋𝐀𝐌
┃ 🏫 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍   :𝐃𝐈𝐏𝐏𝐋𝐎𝐌𝐀 𝐈𝐍 𝐀𝐆𝐑𝐈𝐂𝐔𝐋𝐓𝐔𝐑𝐄 
┃ 🏡 𝐀𝐃𝐃𝐑𝐄𝐒𝐒     :𝐑𝐎𝐍𝐆𝐏𝐔𝐑 𝐊𝐔𝐑𝐈𝐆𝐑𝐀𝐌
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 TikTok       :〲 কারেন্ট 卝 সুন্দর ཐི༏ཋྀ࿐
┃ 🌐 FACEBOOK     : https://www.facebook.com/RAJA.ViP.5X.01715559179
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 UPDATED TiME : ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`"https://i.imgur.com/7zWK7dj.jpeg",`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
