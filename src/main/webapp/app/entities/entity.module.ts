import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TesteJHipsterEmpresaModule } from './empresa/empresa.module';
import { TesteJHipsterFuncionarioModule } from './funcionario/funcionario.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TesteJHipsterEmpresaModule,
        TesteJHipsterFuncionarioModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteJHipsterEntityModule {}
