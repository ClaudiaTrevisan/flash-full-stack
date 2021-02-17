"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const Employee_1 = __importStar(require("../model/Employee"));
class EmployeeController {
    constructor() {
        this.insertEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = new Employee_1.Employee(req.body.company, req.body.name, req.body.surname, req.body.cpf, req.body.email);
                const employeeExists = yield Employee_1.default.findOne({ cpf: input.getCpf() });
                if (employeeExists) {
                    throw new Error("Employee already exists");
                }
                ;
                const newEmployee = new Employee_1.default({
                    company: input.getCompany(),
                    name: input.getName(),
                    surname: input.getSurname(),
                    cpf: input.getCpf(),
                    email: input.getEmail()
                });
                yield newEmployee.save();
                res.status(200)
                    .send("success");
            }
            catch (error) {
                throw new Error(error.message);
            }
            ;
        });
        this.getEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { company } = req.params;
                const employees = [];
                const result = yield Employee_1.default.find({ company });
                if (!result || result.length === 0) {
                    throw new Error("Not found");
                }
                ;
                for (let item of result) {
                    employees.push(Employee_1.OutputEmployee.toEmployeeModel(item));
                }
                ;
                res.status(200);
                res.json(employees);
            }
            catch (error) {
                throw new Error(error.message);
            }
            ;
        });
    }
}
exports.EmployeeController = EmployeeController;
exports.default = new EmployeeController();
