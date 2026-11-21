"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const success_res_1 = require("../../utils/success.res");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
exports.routes = {
    base: "/users",
    signup: "/signup",
    login: "/login", //POST
    profile: "/me", //GET
};
router.get("/", (req, res) => {
    res.status(200).json({
        msg: "user module"
    });
});
router.post(exports.routes.signup, async (req, res) => {
    const { body } = req;
    const { data } = await user_service_1.userServices.signupService(body);
    (0, success_res_1.successRes)({ res, data, status: 201 });
});
router.post(exports.routes.login, async (req, res) => {
    const { identifier, password } = req.body;
    const { data } = await user_service_1.userServices.loginService({ identifier, password });
    (0, success_res_1.successRes)({ res, data, status: 200 });
});
router.get(exports.routes.profile, auth_middleware_1.auth, async (req, res) => {
    const { user, jti } = req;
    (0, success_res_1.successRes)({ res, status: 200 });
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map