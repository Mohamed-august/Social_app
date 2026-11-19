"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const router = (0, express_1.Router)();
exports.routes = {
    base: "/users",
    signup: "/signup"
};
router.get("/", (req, res) => {
    res.status(200).json({
        msg: "user module"
    });
});
router.post(exports.routes.signup, async (req, res) => {
    const { body } = req;
    const { data } = await user_service_1.userServices.signupService(body);
    res.json({
        msg: "Done"
    });
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map