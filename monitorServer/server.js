
const express = require('express')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

mongoose.connect(keys.uri,  { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log("Database Connected"))
.catch(err => {console.log(errr)})


app.use('/api', require('./routes/data'));
app.use('/api', require('./routes/Errors'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
