import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {AppService} from '@app/app.service';
import {ProjetoStatus, Projeto, ResultadoResponse} from '@app/models';
import {zip} from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import {ProjetoFacade} from '@app/facades';
import {LoadingComponent} from '@app/shared/loading/loading.component';

@Component({
    selector: 'app-alterar-status',
    templateUrl: './alterar-status.component.html',
    styles: []
})
export class AlterarStatusComponent implements OnInit {

    status: Array<ProjetoStatus>;
    projeto: ProjetoFacade;

    form: FormGroup;
    catalogFC: FormControl;

    @ViewChild(LoadingComponent) loading: LoadingComponent;

    constructor(protected app: AppService) {
    }

    ngOnInit() {
        const status$ = this.app.catalogo.status();
        const projeto$ = this.app.projetos.projetoLoaded;

        zip(status$, projeto$).subscribe(([status, projeto]) => {
            this.projeto = projeto;

            this.status = status;
            this.catalogFC = new FormControl(this.projeto.catalogStatusId);
            this.form = new FormGroup({
                id: new FormControl(this.projeto.id),
                catalogStatusId: this.catalogFC
            });
            this.catalogFC.valueChanges.subscribe(v => {
                this.projeto.catalogStatusId = parseInt(v, 10);
            });
        });
    }

    save() {
        this.projeto.save().subscribe(result => {
            if (result.sucesso) {
                this.projeto.catalogStatus = this.status.find(s => s.id === parseInt(this.catalogFC.value, 10));

                this.app.alert('Status alterado com sucesso');

                this.app.router.navigate(['dashboard', 'projeto', this.projeto.id, 'central-administrativa']);

            } else {
                this.app.alert(result.inconsistencias.join(', '), 'Erro!');
            }
        });
    }

    deletarProjeto() {
        this.app.prompt('Escreva DELETAR para excluir esse projeto', 'Tem certeza?').then(response => {
            if (response === 'DELETAR') {
                this.loading.show();
                this.app.projetos.removerProjeto(this.projeto.id).subscribe(result => {
                    if (result.sucesso) {
                        this.app.router.navigate(['dashboard']);
                    } else {
                        this.app.alert(result.inconsistencias);
                    }
                    this.loading.hide();
                });
            }
        }, error => {

        });
    }

}
