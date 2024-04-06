// TODO: All Lessons GET
module.exports.allLessons_get = (req, res) => {
  res.render("allLessons");
};

// TODO: dars1 Routes
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
module.exports.dars1_3_post = (req, res) => {
  res.redirect("/barcha-darslar");
};

// TODO: dars2 Routes
module.exports.dars2_get = (req, res) => {
  res.render("dars2_1");
};

module.exports.dars2_2_get = (req, res) => {
  res.render("dars2_2");
};
module.exports.dars2_2_post = (req, res) => {
  res.redirect("/dars2-3");
};

module.exports.dars2_3_get = (req, res) => {
  res.render("dars2_3");
};
module.exports.dars2_3_post = (req, res) => {
  res.redirect("/dars2-4");
};

module.exports.dars2_4_get = (req, res) => {
  res.render("dars2_4");
};
module.exports.dars2_4_post = (req, res) => {
  res.redirect("/barcha-darslar");
};

// TODO: dars3 Routes
module.exports.dars3_get = (req, res) => {
  res.render("dars3");
};
module.exports.dars32_get = (req, res) => {
  res.render("dars32");
};
module.exports.dars33_get = (req, res) => {
  res.render("dars33");
};
// 3.I
module.exports.dars3_1_get = (req, res) => {
  res.render("dars3_1");
};
// 3.II
module.exports.dars3_2_get = (req, res) => {
  res.render("dars3_2");
};

// 3.III
module.exports.dars3_3_get = (req, res) => {
  res.render("dars3_3");
};

// 3.IV
module.exports.dars3_4_get = (req, res) => {
  res.render("dars3_4");
};

// TODO: dars4 Routes
module.exports.dars4_get = (req, res) => {
  res.render("dars4");
};

// TODO: dars5 Routes
module.exports.dars5_get = (req, res) => {
  res.render("dars5");
};

// TODO: dars6 Routes
module.exports.dars6_get = (req, res) => {
  res.render("dars6");
};
