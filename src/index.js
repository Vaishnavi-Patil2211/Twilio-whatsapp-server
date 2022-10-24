const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use(cors());
app.use(bodyParser.json());

app.use('/twillio', require('./twillio'));



app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);


