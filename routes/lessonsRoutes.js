const { Router } = require("express");
const lessonsController = require("../controllers/lessonsController");

const router = Router();

// TODO: All lessons Route
router.get("/barcha-darslar", lessonsController.allLessons_get);

// TODO: dars 1
router.get("/dars1", lessonsController.dars1_get);

router.get("/dars1-2", lessonsController.dars1_2_get);
router.post("/dars1-2", lessonsController.dars1_2_post);

router.get("/dars1-3", lessonsController.dars1_3_get);
router.post("/dars1-3", lessonsController.dars1_3_post);

// TODO: dars 2
router.get("/dars2", lessonsController.dars2_get);

router.get("/dars2-2", lessonsController.dars2_2_get);
router.post("/dars2-2", lessonsController.dars2_2_post);

router.get("/dars2-3", lessonsController.dars2_3_get);
router.post("/dars2-3", lessonsController.dars2_3_post);

router.get("/dars2-4", lessonsController.dars2_4_get);
router.post("/dars2-4", lessonsController.dars2_4_post);

// TODO: dars 3
router.get("/dars3", lessonsController.dars3_get);

module.exports = router;
