
module.exports = fn => (req, res, next) =>
  Promise
  .resolve(fn(req, res, next))
  .catch((e) => {
    console.error(e);
    if (e.isCsvHandlerError){
      if (e.asKey){
        try {
          res.send({success: false,message: e.message});
        }
        catch (e) {
          res.send({success: false,message: e.message});
        }
      }
      else {
        res.send({success: false,message: e.message});
      }
      return;
    }
    res.send({success: false,message: 'Internal server error'});
  });
