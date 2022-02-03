const express = require("express");
const app = express();
const hbs = require("hbs")
const mongoose = require("mongoose")
const path = require("path")
const PORT = process.env.PORT || 3000

require("./connection")


const dataSchema = {
    sno: String,
    x: String,
    b: String,
    r: String,
    y: String
}

const ryb_phases = mongoose.model('ryb_phases', dataSchema)


const tempPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.use('/images', express.static(path.join(__dirname, '../templates/images')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/src',express.static(path.join(__dirname,'../src')))

hbs.registerPartials(partialsPath);

app.set('view engine', 'hbs');
app.set('views', tempPath);

hbs.registerHelper('json', function (content) {
    return JSON.stringify(content);
});

app.get("/", async (req, res) => {
   ryb_phases.find({}, function(err, ryb_phases) {
        res.render('main', {
            response: ryb_phases


            
        })
        
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})
