"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LaunchServices_1 = __importDefault(require("../services/LaunchServices"));
class LaunchController {
    constructor(launchService = new LaunchServices_1.default()) {
        this.launchService = launchService;
        this.createLaunch = async (req, res) => {
            try {
                const launchData = req.body;
                const launch = await this.launchService.createLaunch(launchData);
                res.status(201).json(launch);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to create launch' });
            }
        };
        this.getLaunchById = async (req, res) => {
            try {
                const { id } = req.params;
                const launch = await this.launchService.getLaunchById(id);
                if (launch) {
                    res.json(launch);
                }
                else {
                    res.status(404).json({ error: 'Launch not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to fetch launch' });
            }
        };
        this.updateLaunch = async (req, res) => {
            try {
                const { id } = req.params;
                const updatedData = req.body;
                const updatedLaunch = await this.launchService.updateLaunch(id, updatedData);
                if (updatedLaunch) {
                    res.json(updatedLaunch);
                }
                else {
                    res.status(404).json({ error: 'Launch not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to update launch' });
            }
        };
        this.deleteLaunch = async (req, res) => {
            try {
                const { id } = req.params;
                const deleted = await this.launchService.deleteLaunch(id);
                if (deleted) {
                    res.json({ success: true });
                }
                else {
                    res.status(404).json({ error: 'Launch not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to delete launch' });
            }
        };
    }
    async getAllLaunchs(req, res) {
        try {
            const launches = await this.launchService.getAllLaunchs();
            res.json(launches);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch launches' });
        }
    }
}
exports.default = LaunchController;
//# sourceMappingURL=LaunchController.js.map