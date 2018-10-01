import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IFuncionario } from 'app/shared/model/funcionario.model';
import { FuncionarioService } from './funcionario.service';
import { IEmpresa } from 'app/shared/model/empresa.model';
import { EmpresaService } from 'app/entities/empresa';

@Component({
    selector: 'jhi-funcionario-update',
    templateUrl: './funcionario-update.component.html'
})
export class FuncionarioUpdateComponent implements OnInit {
    private _funcionario: IFuncionario;
    isSaving: boolean;

    empresas: IEmpresa[];

    empresas: IEmpresa[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private funcionarioService: FuncionarioService,
        private empresaService: EmpresaService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ funcionario }) => {
            this.funcionario = funcionario;
        });
        this.empresaService.query({ filter: 'funcionario-is-null' }).subscribe(
            (res: HttpResponse<IEmpresa[]>) => {
                if (!this.funcionario.empresa || !this.funcionario.empresa.id) {
                    this.empresas = res.body;
                } else {
                    this.empresaService.find(this.funcionario.empresa.id).subscribe(
                        (subRes: HttpResponse<IEmpresa>) => {
                            this.empresas = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.empresaService.query().subscribe(
            (res: HttpResponse<IEmpresa[]>) => {
                this.empresas = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.funcionario.id !== undefined) {
            this.subscribeToSaveResponse(this.funcionarioService.update(this.funcionario));
        } else {
            this.subscribeToSaveResponse(this.funcionarioService.create(this.funcionario));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFuncionario>>) {
        result.subscribe((res: HttpResponse<IFuncionario>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackEmpresaById(index: number, item: IEmpresa) {
        return item.id;
    }
    get funcionario() {
        return this._funcionario;
    }

    set funcionario(funcionario: IFuncionario) {
        this._funcionario = funcionario;
    }
}
