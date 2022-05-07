const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));