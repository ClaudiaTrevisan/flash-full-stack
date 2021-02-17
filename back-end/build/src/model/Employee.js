"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = exports.OutputEmployee = exports.Employee = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Employee {
    constructor(company, name, surname, cpf, email) {
        this.company = company;
        this.name = name;
        this.surname = surname;
        this.cpf = cpf;
        this.email = email;
        this.getCompany = () => this.company;
        this.getName = () => this.name;
        this.getSurname = () => this.surname;
        this.getCpf = () => this.cpf;
        this.getEmail = () => this.email;
    }
}
exports.Employee = Employee;
;
class OutputEmployee {
    constructor(id, company, name, surname, cpf, email) {
        this.id = id;
        this.company = company;
        this.name = name;
        this.surname = surname;
        this.cpf = cpf;
        this.email = email;
    }
}
exports.OutputEmployee = OutputEmployee;
OutputEmployee.toEmployeeModel = (data) => {
    return new OutputEmployee(data.id, data.company, data.name, data.surname, data.cpf, data.email);
};
const { Schema } = mongoose_1.default;
exports.employeeSchema = new Schema({
    company: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
});
const Employeedb = mongoose_1.default.model("Employeedb", exports.employeeSchema);
exports.default = Employeedb;
