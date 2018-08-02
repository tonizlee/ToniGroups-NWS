var express = require('express')
var app = express();
var ejs = require('ejs')

app.set('views', __dirname+'/views')
app.set('view engine', 'html')
app.engine('html',ejs.renderFile)

// function showJsonDatas(req, res){
//     var sampledata = parseData[0]
//     console.log(sampledata);
//     var datas = {
//         name: sampledata.Name,
//         id: sampledata.ID
//     }
//     console.log(datas)
// }

app.get('/', function (req, res){
    res.send('Test 4321')
})

app.get('/json', function(req, res){
    res.render('json.ejs')
})

app.get('/main', function (req, res){
    res.render('MainPage.html')
})

app.post('/gen', function (req, res){
    res.send('The name is ' + req.body.name)
})

app.listen(4321, function(){
    console.log("Connected 4321 Port")
})