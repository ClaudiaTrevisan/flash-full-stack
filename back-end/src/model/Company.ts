import mongoose from "mongoose"

export class Company {
    constructor(
        private name: string,
        private name_fantasy: string,
        private cnpj: string,
        private address: string,
        private benefits: string
    ) {}

    public getName = (): string => this.name;
    public getNameFantasy = (): string => this.name_fantasy;
    public getCnpj = (): string => this.cnpj;
    public getAddress = (): string => this.address;
    public getBenefits = (): string => this.benefits;
};

export interface CompanyOutput {
    id: string,
    name: string,
    name_fantasy: string,
    cnpj: string,
    address: string,
    benefits: string
};

const {Schema} = mongoose;
const companySchema = new Schema(
    {
        name: {type: String, require: true, unique: true},
        name_fantasy: {type: String, require: true},
        cnpj: {type: String, require: true, unique: true},
        addres: {type: String, require: true},
        benefits: {type: String, require: true},
    }
);
const Companydb = mongoose.model("Companydb", companySchema)
export default Companydb