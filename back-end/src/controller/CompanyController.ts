import { Request, Response } from "express";
import Companydb from "../model/Company";
import { Company } from "../model/Company";

export class CompanyController {

    public insertCompany = async (req: Request, res: Response): Promise<void> => {
        try{
            const input: Company = new Company (
                req.body.name,
                req.body.name_fantasy,
                req.body.cnpj,
                req.body.address,
                req.body.benefits
            );
            const companyExists = await Companydb.findOne({name: input.getName()});

            if(companyExists){
                throw new Error("Company already exist");
            };

            const newCompany = new Companydb({
                name: input.getName(),
                name_fantasy: input.getNameFantasy(),
                cnpj: input.getCnpj(),
                address: input.getAddress(),
                benefits: input.getBenefits()
            });

            await newCompany.save();

            res.status(200)
            .send("success")

        } catch (error) {
            throw new Error(error.message);
        };
    };
}
export default new CompanyController()