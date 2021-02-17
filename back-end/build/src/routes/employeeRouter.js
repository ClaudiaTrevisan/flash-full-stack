"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = __importDefault(require("express"));
const EmployeeController_1 = __importDefault(require("../controller/EmployeeController"));
exports.employeeRouter = express_1.default.Router();
exports.employeeRouter.post("/", EmployeeController_1.default.insertEmployee);
exports.employeeRouter.get("/:company", EmployeeController_1.default.getEmployees);
