const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoutes.js")
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const compass_sting = "mongodb+srv://frankiecodesolutions_db_user:Cohort8@dbcohort8.evxcmnj.mongodb.net/?appName=Dbcohort8";
const atlas_string = process.env.MONGO_URI;

mongoose.connect(atlas_string)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Connection Error: ", err));


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Dey Active!');
});

app.use('/users', userRoute);
app.use('/products', productRoute);

app.listen(port, () => {
    console.log(`Server Dey Active on port :${port}`);
});


//mongoose.connect(mongodb+srv://frankiecodesolutions_db_user:Cohort8@dbcohort8.evxcmnj.mongodb.net/?appName=Dbcohort8)