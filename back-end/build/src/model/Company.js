"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Company {
    constructor(name, name_fantasy, cnpj, address, benefits) {
        this.name = name;
        this.name_fantasy = name_fantasy;
        this.cnpj = cnpj;
        this.address = address;
        this.benefits = benefits;
        this.getName = () => this.name;
        this.getNameFantasy = () => this.name_fantasy;
        this.getCnpj = () => this.cnpj;
        this.getAddress = () => this.address;
        this.getBenefits = () => this.benefits;
    }
}
exports.Company = Company;
;
;
const { Schema } = mongoose_1.default;
const companySchema = new Schema({
    name: { type: String, require: true, unique: true },
    name_fantasy: { type: String, require: true },
    cnpj: { type: String, require: true, unique: true },
    addres: { type: String, require: true },
    benefits: { type: String, require: true },
});
const Companydb = mongoose_1.default.model("Companydb", companySchema);
exports.default = Companydb;
