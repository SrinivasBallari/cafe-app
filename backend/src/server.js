const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const cors = require('cors');

const setUpAndStartServer = () => {
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setUpAndStartServer();

