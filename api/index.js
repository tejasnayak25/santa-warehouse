let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "..")));

app.use(express.json());

app.route("/")
.get((req, res) => {
    res.sendFile(path.join(__dirname, "..", "html", "index.html"));
});

app.route("/gifts")
.post((req, res) => {
    let { name } = req.body;
    let data = require(path.join(__dirname, "..", "js", "gifts.json"));

    let person = Object.entries(data).find(([ key, val ]) => key === name.trim().toLowerCase());
    if(person) {
        res.json(person[1]);
    } else {
        res.json({
            "name": "Toffee",
            "image": "/images/toffee.jpg",
            "message": "Wishing you a joyous Christmas! Enjoy this toffee."
        });
    }
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});