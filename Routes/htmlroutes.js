const router = require ('express').Router();



  router.get("/notes", (req, res) => {
    res.sendFile(`${__dirname}../../public/notes.html`);
  });

  router.get("*", (req, res) => {
    res.sendFile(`${__dirname}../../public/index.html`);
  });

  router.get("/", (req, res) => {
    res.sendFile(`${__dirname}../../public/index.html`);
  });



  module.exports = router;