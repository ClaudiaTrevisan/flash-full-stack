"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const Company_1 = __importDefault(require("../model/Company"));
const Company_2 = require("../model/Company");
class CompanyController {
    constructor() {
        this.insertCompany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = new Company_2.Company(req.body.name, req.body.name_fantasy, req.body.cnpj, req.body.address, req.body.benefits);
                const companyExists = yield Company_1.default.findOne({ name: input.getName() });
                if (companyExists) {
                    throw new Error("Company already exist");
                }
                ;
                const newCompany = new Company_1.default({
                    name: input.getName(),
                    name_fantasy: input.getNameFantasy(),
                    cnpj: input.getCnpj(),
                    address: input.getAddress(),
                    benefits: input.getBenefits()
                });
                yield newCompany.save();
                res.status(200)
                    .send("success");
            }
            catch (error) {
                throw new Error(error.message);
            }
            ;
        });
    }
}
exports.CompanyController = CompanyController;
exports.default = new CompanyController();
