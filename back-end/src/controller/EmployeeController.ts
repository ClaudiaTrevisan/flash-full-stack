import { Request, Response } from "express";
import Employeedb, { Employee, OutputEmployee } from "../model/Employee";

export class EmployeeController {

    public insertEmployee = async (req: Request, res: Response): Promise<void> =>{
        try {
            const input: Employee = new Employee(
                req.body.company,
                req.body.name,
                req.body.surname,
                req.body.cpf,
                req.body.email
            );
            const employeeExists = await Employeedb.findOne({cpf: input.getCpf()});

            if(employeeExists){
                throw new Error("Employee already exists");
            };

            const newEmployee = new Employeedb ({
                company: input.getCompany(),
                name: input.getName(),
                surname: input.getSurname(),
                cpf: input.getCpf(),
                email: input.getEmail()
            });

            await newEmployee.save();

            res.status(200)
            .send("success")

        } catch (error) {
            throw new Error(error.message);
        };
    };

    public getEmployees = async (req: Request, res: Response): Promise<void> =>{
        try {
            const {company} = req.params
            const employees: OutputEmployee[] = [];
            const result = await Employeedb.find({company});

            if(!result || result.length === 0){
                throw new Error("Not found");
            };

            for(let item of result){
                employees.push(OutputEmployee.toEmployeeModel(item));
            };
            
            res.status(200)
            res.json(employees)

        } catch (error) {
            throw new Error(error.message);
        };
    };
}
export default new EmployeeController()