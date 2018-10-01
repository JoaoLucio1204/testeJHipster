import { IFuncionario } from 'app/shared/model//funcionario.model';

export interface IEmpresa {
    id?: number;
    cnpj?: number;
    razaoSocial?: string;
    nomeFantasia?: string;
    nomeResponsavel?: string;
    rua?: string;
    numero?: number;
    bairro?: string;
    cidade?: string;
    estado?: string;
    funcionarios?: IFuncionario[];
    funcionario?: IFuncionario;
}

export class Empresa implements IEmpresa {
    constructor(
        public id?: number,
        public cnpj?: number,
        public razaoSocial?: string,
        public nomeFantasia?: string,
        public nomeResponsavel?: string,
        public rua?: string,
        public numero?: number,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public funcionarios?: IFuncionario[],
        public funcionario?: IFuncionario
    ) {}
}
