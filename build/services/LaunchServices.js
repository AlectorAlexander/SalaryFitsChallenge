"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LaunchsModels_1 = __importDefault(require("../database/models/LaunchsModels"));
class LaunchService {
    async createLaunch(data) {
        const launch = await LaunchsModels_1.default.create(data);
        return launch;
    }
    async getAllLaunchs() {
        const launches = await LaunchsModels_1.default.findAll();
        return launches;
    }
    async getLaunchById(id) {
        const launch = await LaunchsModels_1.default.findByPk(id);
        return launch;
    }
    async updateLaunch(id, data) {
        await LaunchsModels_1.default.update(data, {
            where: { id },
        });
        const updatedLaunch = await LaunchsModels_1.default.findByPk(id);
        return updatedLaunch;
    }
    async deleteLaunch(id) {
        const deletedRowsCount = await LaunchsModels_1.default.destroy({
            where: { id },
        });
        return deletedRowsCount > 0;
    }
}
exports.default = LaunchService;
//# sourceMappingURL=LaunchServices.js.map