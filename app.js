import express from 'express';
const app = express();
const PORT = 8080;

app.use([
    express.json(),
    express.urlencoded({extended: true})
])

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('root');
})

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})