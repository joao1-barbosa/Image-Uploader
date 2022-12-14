const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('short'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);
app.use('/public', express.static(process.cwd() + '/src/public'));


app.listen(3000, () => {
    console.log('\n\t Running on http://localhost:3000 \n');
});