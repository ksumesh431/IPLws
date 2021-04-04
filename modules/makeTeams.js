const{fs,path,request,cheerio,createDir}=require("../includes");

function makeTeams(url){
    request(url,(err,res,html)=>{
        if(err){
            console.log(err);
        }else{
            let selectorTool = cheerio.load(html);
            let teams = selectorTool(".table.table-sm.standings-widget-table.text-center.mb-0.border-bottom tbody tr td:first-child a")
            for (let index = 0; index < teams.length; index++) {
                const element = selectorTool(teams[index]);
                let team = (element.text().substring(1));
                createDir(path.join(__dirname+"\\..\\IPL 2020\\"+team))
            }
        }
    })
}
module.exports={
    makeTeams
}