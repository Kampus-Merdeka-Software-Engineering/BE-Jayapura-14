const express = require('express');
const app = express();
const conn = require('./index.js');
const port = 4306;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./"));
app.use(bodyParser.json());

app.get("/test", function(req, res) {
    console.log("nama: ", req.body.name, ", id: ", req.body.id);
});


// API menyimpan data peserta
app.post('/simpan-data', async function(req, res){
    await console.log(req.body);
    const param = req.body;
    const nama_lengkap = param.nama_lengkap;
    const email = param.email;
    const no_telp = param.no_telp;
    const gender = param.gender;
    const now = new Date();
    
    const queryStr = "insert into data_pengguna (nama_lengkap, email, no_telp, gender, created_at) VALUE (?, ?, ?, ?, ?);"
    const values = [nama_lengkap, email, no_telp, gender, now]; 
    console.log(values);
    
    conn.query(queryStr, values,(err, results) => {
        if (err){  
            console.log(err);
            res.status(400).json({
                "success": false,
                "message": "Gagal menampilkan data."
            });
        }
        else{
            res.status(200).json({
                "success": true,
                "message": "Sukses menampilkan data",
                "data": results
            });
        }
    });
})

app.listen(port, "localhost");