/*const express = require("express");
const path = require("path");
const app = express();
const assetsRouter = require("./server/assets-router");

app.use("/src", assetsRouter);
app.use("/", express.static(path.join(_dirname, "public")));
app.get("/api/v1",(req,res) => {
    res.json({
        project: "React and Express Boilerplate",
        from: "Vanaldito",
    });
});
app.get("/*",(_req,res)=>{
    res.sendFile(path.join(_dirname,"public", "index.html"));
})
*/
const express = require('express');
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

const db = configureMongoose();
const app = configureExpress();

const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

