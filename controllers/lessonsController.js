module.exports.dars1_get = (req, res) => {
  res.render("dars1");
};
module.exports.dars1_2_get = (req, res) => {
  res.render("dars1_2");
};
module.exports.dars1_2_post = (req, res) => {
  res.redirect("/dars1-3");
};

module.exports.dars1_3_get = (req, res) => {
  res.render("dars1_3");
};
