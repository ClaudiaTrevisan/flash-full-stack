import express from "express";
import EmployeeController from "../controller/EmployeeController";

export const employeeRouter = express.Router();

employeeRouter.post("/", EmployeeController.insertEmployee);
employeeRouter.get("/:company", EmployeeController.getEmployees);