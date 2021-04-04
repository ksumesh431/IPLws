const { fs, path, request, cheerio, createDir } = require("../includes");

function processPlayers(url) {
    request(url, (err, res, html) => {
        if (err) {
            console.log(err);
        } else {
            let selTool = cheerio.load(html);
            let team1 = selTool("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.teams > div:nth-child(1) > div.name-detail > a > p").text().trim()
            let team2 = selTool("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.teams > div.team.team-gray > div.name-detail > a > p").text().trim();

            const dateandvenue = selTool(".match-info.match-info-MATCH .description").text().split(",")
            const date = dateandvenue[2].split("(")[0].trim()
            const venue = dateandvenue[1].trim()
            const result=selTool("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.status-text > span").text().trim();
            
        }
    })
}
// processPlayers("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-royal-challengers-bangalore-25th-match-1216525/full-scorecard");

module.exports = {
    processPlayers
}
