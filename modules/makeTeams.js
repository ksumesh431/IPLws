const { fs, path, request, cheerio, createDir } = require("../includes");

function makeTeams(url) {
    request(url, (err, res, html) => {
        if (err) {
            console.log(err);
        } else {
            let selTool = cheerio.load(html);
            let namesArr = selTool("tbody tr .header-title.label");
            for (let i = 0; i < namesArr.length; i++) {
                let teamName = selTool(namesArr[i]).text();
                // console.log(teamName+"\n");
                createDir(path.join(__dirname + "\\..\\IPL 2020\\" + teamName));
            }

        }
    })
}
module.exports = {
    makeTeams
}
// let selectorTool = cheerio.load(html);
// let teams = selectorTool(".table.table-sm.standings-widget-table.text-center.mb-0.border-bottom tbody tr td:first-child a")
// for (let index = 0; index < teams.length; index++) {
//     const element = selectorTool(teams[index]);
//     let team = (element.text().substring(1));
//     createDir(path.join(__dirname + "\\..\\IPL 2020\\" + team))
// }