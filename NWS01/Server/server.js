var express = require('express')
var app = express();
var ejs = require('ejs')

app.set('views', __dirname+'/views')
app.set('view engine', 'html')
app.engine('html',ejs.renderFile)

app.get('/', function (req, res){
    res.send('Test 4321')
})

app.get('/main', function (req, res){
    res.render('main.html')
})

app.get('/gen', function (req, res){
    res.render('generation.html')
})


app.listen(4321, function(){
    console.log("Connected 4321 Port")
})