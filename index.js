const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request-promise");
const dataJson = require('./datafetch')



request("https://subanime.net/ta-da-choc-tuc-ca-dam-tu-luyen-gia-tap-28/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = [];
        // fs.writeFileSync("index.html", html, 'utf-8')
        const video = $('.video-player iframe').attr("src")
        // console.log(video)
        data.push({
            video
        })
        fs.writeFileSync("data.html", html);
        fs.writeFileSync("data.json", JSON.stringify(data));

    } else {
        console.log(error);
    }
});
