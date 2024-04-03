const { Router } = require("express");
const lessonsController = require("../controllers/lessonsController");

const router = Router();

router.get("/dars1", lessonsController.dars1_get);
router.get("/dars1-2", lessonsController.dars1_2_get);

module.exports = router;
