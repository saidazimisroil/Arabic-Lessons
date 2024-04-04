const { Router } = require("express");
const lessonsController = require("../controllers/lessonsController");

const router = Router();

router.get("/dars1", lessonsController.dars1_get);
router.get("/dars1-2", lessonsController.dars1_2_get);
router.post("/dars1-2", lessonsController.dars1_2_post);

router.get("/dars1-3", lessonsController.dars1_3_get);

module.exports = router;
