module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "info bot owner",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
 "Đừng mong chờ gì từ MintBot.",
 "Cái đoạn này á? Của SpermBot.",
 "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
 "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
 "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
 "Cặc.",
 "Cút.",
 "Lồn.",
 "Bạn chưa biết.",
 "Bạn đã biết.",
 "Bạn sẽ biết.",
 "Không có gì là hoàn hảo, MintBot là ví dụ.",
 "Mirai dropped.",
 "MintBot là MiraiProject nhưng module là idea của SpermBot.",
 "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
 "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
 "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
 "MintBot cân spam nhưng không có gì đáng để bạn spam."
 ];
 var link = [
 "https://i.imgur.com/7jiWooK.jpeg",
 ];

 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix system: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n──────────────\n[thanks for using bot!!]`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}/**
 * @author Shaon Ahmed
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "🥰আসসালামু আলাইকুম 🥰",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const content = args.slice(1, args.length);
 const { threadID, messageID, mentions } = event;
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const { userName } = global.data;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 const { writeFileSync } = global.nodemodule["fs-extra"];
 const mention = Object.keys(mentions);
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const listNDH = NDH || config.NDH || [];
 {
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
 {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
 : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);
 const data = [
 "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
 "Đừng mong chờ gì từ MintBot.",
 "Cái đoạn này á? Của SpermBot.",
 "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
 "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
 "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
 "Cặc.",
 "Cút.",
 "Lồn.",
 "Bạn chưa biết.",
 "Bạn đã biết.",
 "Bạn sẽ biết.",
 "Không có gì là hoàn hảo, MintBot là ví dụ.",
 "Mirai dropped.",
 "MintBot là MiraiProject nhưng module là idea của SpermBot.",
 "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
 "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
 "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
 "MintBot cân spam nhưng không có gì đáng để bạn spam."
 ];
 var link = [
"https://i.imgur.com/7jiWooK.jpeg",
 ]; 
 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 const date = moment.tz("Asia/Dhaka").format("hh:mm:ss");
 for (const idAdmin of listAdmin) {
 if (parseInt(idAdmin)) {
 const name = await Users.getNameUser(idAdmin);
 msg.push(`${i++}/ ${name} - ${idAdmin}`);
 }
 }
 var msg1 = [];
 for (const idNDH of listNDH) {
 if (parseInt(idNDH)) {
 const name1 = (await Users.getData(idNDH)).name
 msg1.push(`${i++}/ ${name1} - ${idNDH}`);
 }
 }
 var callback = () => 
 api.sendMessage({ body: 
 `🍀----আসসালামু আলাইকুম----🍀

┏━━•❅•••❈•••❈•••❅•━━┓\n\n「 ${namebot} 」\n\n┗━━•❅•••❈•••❈•••❅•━━┛ \n\n______________________________\n\n↓↓_𝐙𝐍 𝐉𝐇𝐈𝐌𝐀 𝐒𝐄𝐒𝐘𝐓𝐄𝐌 𝐈𝐍𝐅𝐎_↓↓\n\n» 𝗣𝗿𝗲𝗳𝗶𝘅 𝘀𝘆𝘀𝘁𝗲𝗺: ${PREFIX}\n\n» 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘅: ${prefix}\n\n» 𝐓𝐎𝐓𝐒𝐋 𝐌𝐎𝐃𝐔𝐋𝐄𝐒:➪ ${commands.size}\n\n» 𝐏𝐈𝐍𝐊: ${Date.now() - dateNow}ms\n______________________________\n\n ↓↓_𝐙𝐍 𝐉𝐇𝐔𝐌𝐀 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎_↓↓\n\n 
NAME    :〲 নূৰ নবী 卝 চৌধুৰী ཐི༏ཋྀ࿐

FACEBOOK:https://www.facebook.com/RAJA.ViP.5X.01715559179

WHATAPP :01715559179

______________________________\n\n----↓↓𝐙𝐍 𝐉𝐇𝐔𝐌𝐀 𝐀𝐂𝐓𝐈𝐕𝐄 𝐓𝐈𝐌𝐄:➪↓↓----\n\n ${hours} : ${minutes} : ${seconds} second(s)\n\n______________________________\n» 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒:➪ ${global.data.allUserID.length} \n\n» 𝐓𝐎𝐓𝐀𝐋 𝐆𝐑𝐎𝐔𝐏:➪ ${global.data.allThreadID.length}\n______________________________\n\n 𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆\n 𝐌𝐃:𝐍𝐔𝐑𝐍𝐎𝐁𝐈 𝐇𝐀𝐐𝐔𝐄 
\n--------------------------------------------------\n\n☢️☣️⚠️`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
 }
}
