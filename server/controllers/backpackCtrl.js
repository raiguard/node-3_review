module.exports = {
  getItems: (req, res) => {
    const db = req.app.get("db");

    db.get_items()
      .then((items) => res.status(200).send(items))
      .catch((err) => res.status(500).send(err));
  },
  addItem: (req, res) => {
    const db = req.app.get("db");
    const { name, purpose } = req.body;

    db.add_item({ name, purpose })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  }
};
