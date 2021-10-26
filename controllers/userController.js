const users = [
  { id: 1, name: "Jonh" },
  { id: 2, name: "david" },
  { id: 3, name: "maria" },
];

const status = {
  ok: 200,
  notFound: 400,
};

module.exports = {
  list: (req, res) => {
    console.log(req.query.order);
    res, status(status.ok).send(users);
  },
  profile: (req, res) => {
    //console.log(req.params.);
    const users = users.find((user) => user.id === req.params.userId);
    if (user) {
      res, status(status.ok).send(user);
    } else {
      res, status(status.notFound).send(msg);
    }
    res, status(status.ok).send(users);
  },
};
