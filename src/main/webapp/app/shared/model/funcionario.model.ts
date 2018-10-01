import { IEmpresa } from 'app/shared/model//empresa.model';

export interface IFuncionario {
    id?: number;
    nome?: string;
    cpf?: number;
    dataNascimento?: string;
    empresaContratado?: string;
    empresa?: IEmpresa;
    empresa?: IEmpresa;
}

export class Funcionario implements IFuncionario {
    constructor(
        public id?: number,
        public nome?: string,
        public cpf?: number,
        public dataNascimento?: string,
        public empresaContratado?: string,
        public empresa?: IEmpresa,
        public empresa?: IEmpresa
    ) {}
}
