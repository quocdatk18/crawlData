const cheerio = require("cheerio");
const fs = require("fs");
const { resolve } = require("path");
const request = require("request-promise");
const dataJson = require('./datafetch')
let newData = [];
async function runApp() {
	await Promise.all(dataJson.map(item => {
		console.log("oke")
		newData.push({
			video: []
		})
		return new Promise(async (resolve, reject) => {

			await Promise.all(item.list.map((chaper) => {
				request(chaper.linkList, (error, response, html) => {
					const $ = cheerio.load(html);
					const video = $('.video-player iframe').attr("src")
					chaper['video'] = video
					fs.writeFileSync("newData.html", html);
					return newData

				})
				fs.writeFileSync("newData.json", JSON.stringify(newData));


			}))
			resolve("oke")
		})
	})



	)
}

runApp()

// async () => {
// 	await Promise.all(item.list.map((chaper) => {
// 		return request(chaper.linkList, (error, response, html) => {
// 			const $ = cheerio.load(html);
// 			chaper['video'] = $('.player-embed iframe').attr("src")
// 			console.log($('.player-embed iframe').attr("src"))
// 			newData.push(item)
// 		})

// 	}))

// const newData = dataJson.map(async (item) => {
// 	Promise.all(item.list.map((chaper) => {

// 		return request(chaper.linkList, (error, response, html) => {

// 		})

// 	})
// 	)
// }
// )

// fs.writeFileSync('newData.json', newData);

// request("https://subanime.net/anime/?page=1&status=&type=&order=update", async (error, response, html) => {
// 	if (!error && response.statusCode == 200) {
// 		const $ = cheerio.load(html);
// 		let data = []
// 		$('.listupd .bs').each((index, el) => {
// 			const name = $(el).find('h2').text();
// 			const image = $(el).find('.ts-post-image').attr("src");

// 			const link = $(el).find("a").attr('href')
// 			const type = $(el).find(".typez.TV ").text()

// 			data.push({
// 				name,
// 				image,

// 				type,
// 				link,

// 				description: '',
// 				list: [],
// 			})
// 		});



		// await Promise.all(data.map(p => {
		// 	console.log(p.link)
		// 	return request(p.link, ((error, response, html) => {
		// 		if (!error && response.statusCode == 200) {
		// 			const $ = cheerio.load(html);
		// 			let data1 = []
		// 			p['description'] = $('.entry-content p').text()
		// 			$('.eplister ul li').each((index, el) => {
		// 				const nameList = $(el).find('.epl-title').text();
		// 				const date = $(el).find('.epl-date').text();
		// 				const chapter = $(el).find('.epl-num').text()

		// 				const linkList = $(el).find("a").attr('href')

		// 				data1.push({
		// 					nameList,

		// 					date,
		// 					chapter,
		// 					linkList,

		// 				})
		// 			})

		// 			p['list'] = data1
					// Promise.all(data1.map(promises => {
					// 	return request(promises.linkList, ((error, response, html) => {

					// 		if (!error && response.statusCode == 200) {
					// 			const $ = cheerio.load(html);
					// 			promises['video'] = $('.player-embed iframe').attr("src")
					// 			console.log($('.player-embed iframe').attr("src"))
					// 		}
					// 		fs.writeFileSync('videonew1.html', html);
					// 	}))
					// }))
				// }
		// 		fs.writeFileSync('videonew.html', html); // lưu dữ liệu vào file data.json


		// 	}))

		// }))
		// fs.writeFileSync('video2.html', html);
		// fs.writeFileSync('video2.json', JSON.stringify(data));
		// lưu dữ liệu vào file data.json
		// lưu dữ liệu vào file data.json







// 	}
// 	else {
// 	console.log('lỗi');
// }
// });

