module.exports.helloWorld = function (req, res) {
  const responseObj = { msg: `Hello world!` };
  const responseStatus = 200;
  res.status(responseStatus).send(responseObj);
};
