var fs = require('fs')
var readFile = fs.readFileSync('sample.json')
var parseData = JSON.parse(readFile)

function showJsonDatas(req, res) {
    var datas =[]
    var sampledata = parseData[0]
    console.log(sampledata);
    var info = {
        name: sampledata.Name,
        id: sampledata.ID
    }
    datas.push(info)

    var result={
        count: datas.length,
        datas: datas
    }

    res.render('json.ejs', result)
}