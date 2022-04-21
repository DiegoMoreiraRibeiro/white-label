import express from "express";
import LoginController from "../Controllers/LoginController";

const router = express.Router();

router
    .post("/login", LoginController.validarLogin)

export default router;   