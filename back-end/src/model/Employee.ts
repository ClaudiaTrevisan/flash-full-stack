import mongoose from "mongoose";

export class Employee {
    constructor(
        private company: string,
        private name: string,
        private surname: string,
        private cpf: string,
        private email: string
    ) {}

    public getCompany = (): string => this.company;
    public getName = (): string => this.name;
    public getSurname = (): string => this.surname;
    public getCpf = (): string => this.cpf;
    public getEmail = (): string => this.email;
};

export class OutputEmployee {
    constructor(
        private id: string,
        private company: string,
        private name: string,
        private surname: string,
        private cpf: string,
        private email: string
    ) {}
    public static toEmployeeModel = (data: any) =>{
        return new OutputEmployee(
            data.id,
            data.company,
            data.name,
            data.surname,
            data.cpf,
            data.email
        );
    };

}

const {Schema} = mongoose;
export const employeeSchema = new Schema(
    {
        company: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
    }
);
const Employeedb = mongoose.model("Employeedb", employeeSchema);
export default Employeedb