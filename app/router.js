'use strict';

const express = require('express');
const router = express.Router();
const AsyncHandler = require('./utils/middlewares/AsyncHandler');
const AuthChecker = require('./utils/middlewares/AuthChecker');
/* const AuthChecker = require('./utils/AsyncHandler').authChecker; */

//`${proxy}/version`
router.get('/', AsyncHandler(async function (req,res) {
  let now = new Date();
  let pack = require('./../package');
  res.send({version: pack.version,timezone: now.getTimezoneOffset(),date: now});
}));

router.post('/auth/signup', AsyncHandler(require('./modules/users').signUp));

router.post('/auth/signin', AsyncHandler(require('./modules/users').signIn));

router.post('/csv', AuthChecker, AsyncHandler(require('./modules/csv').insert));

router.get('/csv', AuthChecker, AsyncHandler(require('./modules/csv').getCsvs));

router.get('/csv/:id', AuthChecker, AsyncHandler(require('./modules/csv').getCsvById));

module.exports = router;
