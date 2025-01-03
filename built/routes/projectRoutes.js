"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const router = (0, express_1.Router)();
// router.post('/create', createProject as RequestHandler);
// router.put('/:projectId', updateProject as RequestHandler);
router.get('/admin/:admin_id', projectController_1.getProjectsByAdminId);
router.get('/:projectId', projectController_1.getProjectById);
// router.post('/create', createProject);
// router.put('/:projectId', updateProject);
// router.get('/admin/:admin_id', getProjectsByAdminId);
// router.get('/:projectId', getProjectById);
exports.default = router;
