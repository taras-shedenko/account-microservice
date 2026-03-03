import { Router } from "express";
import * as controller from "../controllers/account.js";
import * as validator from "../validators/account.js";
import validate from "../middlewares/validate.js";

const router = new Router();
router.get("/", controller.getAllAccount);
router.get(
  "/:id",
  validate(validator.getAccountById),
  controller.getAccountById,
);
router.post("/", validate(validator.createAccount), controller.createAccount);
router.put(
  "/:id",
  validate(validator.updateAccountById),
  controller.updateAccountById,
);
router.delete(
  "/:id",
  validate(validator.deleteAccountById),
  controller.deleteAccountById,
);

export default router;
