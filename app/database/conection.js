const mongoose = require('mongoose');
const users = require('./../modules/users');

mongoose
  .connect(process.env.CONECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log(`DB is connected`)
    users.signUpInitialConfig(
      {
        body: {
          username: "Samir0101", 
          email: "samirarroyavecharris@identidadtech.com", 
          password: "12345"
        }
      }
    )
  })
  .catch((err) => console.log(err));