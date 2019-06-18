const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);

var contact = {
	name: "Steve Peters",
	email: "steve@steve.com",
	phone: "206-555-1212",
	fax: "Who uses faxes anymore?",
	site: "http://steve.io"
};


app.get('/', function(req,res) {
    res.render('index',);
});

app.get('/contact', function(req, res) {
    res.render('contact', {contact});
});

app.get('/skills', function(req, res) {
    var skills = [
        "JavaScript",
        "HTML 5",
        "CSS 3",
        "Node JS",
        "Express JS",
        "Crooning"
    ]
    res.render('skills', {skills});
});

app.listen(3000, function() {
    console.log("Listening on port 3000...");
});
