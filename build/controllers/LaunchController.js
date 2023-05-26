"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LaunchServices_1 = require("../services/LaunchServices");
class LaunchController {
    constructor() {
        this.createLaunch = async (req, res) => {
            try {
                const launchData = req.body;
                const launch = await this.launchServices.createLaunch(launchData);
                res.status(201).json(launch);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to create launch' });
            }
        };
        this.getLaunchById = async (req, res) => {
            try {
                const { id } = req.params;
                const launch = await this.launchServices.getLaunchById(id);
                if (launch) {
                    res.json(launch);
                }
                else {
                    res.status(404).json({ error: 'Launch not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to get launch' });
            }
        };
        this.updateLaunch = async (req, res) => {
            try {
                const { id } = req.params;
                const updatedData = req.body;
                const updatedLaunch = await this.launchServices.updateLaunch(id, updatedData);
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
                const deleted = await this.launchServices.deleteLaunch(id);
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
        this.launchServices = new LaunchServices_1.default();
    }
    async getAllLaunchs(req, res) {
        try {
            const launches = await this.launchServices.getAllLaunchs();
            res.json(launches);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = LaunchController;
//# sourceMappingURL=LaunchController.js.map