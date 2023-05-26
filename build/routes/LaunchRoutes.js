"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LaunchController_1 = require("../controllers/LaunchController");
const launchRoutes = (0, express_1.Router)();
const launchController = new LaunchController_1.default();
launchRoutes.post('/', launchController.createLaunch);
launchRoutes.get('/launches', launchController.getAllLaunchs);
launchRoutes.get('/:id', launchController.getLaunchById);
launchRoutes.put('/:id', launchController.updateLaunch);
launchRoutes.delete('/:id', launchController.deleteLaunch);
exports.default = launchRoutes;
//# sourceMappingURL=LaunchRoutes.js.map