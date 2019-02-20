export * from './ui.module';


/***

TODO: Idéias

  * Suportar Template-Driven forms
  * Suportar Reactive/Model-Driven forms
  * Aprofundar no conhecimento de providers

ControlValueAccessor: ponte entre o form model e o DOM
  * Escreve o valor do model para o view/DOM
  * Informa outras diretivas de formularios e controles que o view/DOM mudou


DefaultValueAccessor: Cuida de inputs e textareas
SelectControlValueAccessor: Cuida de inputs e textareas
CheckboxControlValueAccessor: Cuida de inputs e textareas


<!-- Grid Uso -->
    <sc-grid>
        <sc-grid-col col="6" xs="6" md="6" row="4">T</sc-grid-col>
        <sc-grid-col col="6" xs="6" md="6"> T</sc-grid-col>
        <sc-grid-col col="6">T</sc-grid-col>
        <sc-grid-col col="6">T</sc-grid-col>
        <sc-grid-col col="6">T</sc-grid-col>
    </sc-grid-->

<!-- Jeito convencional -->

<form [formGroup]="formulario-exemplo" (ngSubmit)="submit(formulario-exemplo.value)">

    <div class="col-4">
        <label>Apelido</label>
		<input type="text"
		       class="form-control"
		       name="password"
		       formControlName="apelido"
		       required
               minlength="2"
               maxlength="20"
		       #apelido="ngModel">
		<div class="form-control-feedback"
		     *ngIf="password.errors && (password.dirty || password.touched)">
			<p *ngIf="password.errors.required">Campo Requerido</p>
            <p *ngIf="password.errors.minlength">Tamanho mínimo inválido</p>
            <p *ngIf="password.errors.maxlength">Tamanho máximo inválido</p>
        </div>
    </div>

</form>



<!-- Template form example -->

<sc-form grid [formGroup]="formulario-exemplo" (ngSubmit)="submit(formulario-exemplo.value)">
    <sc-grid-col col="4">
        <sc-input ngModel
            name="apelido"
            required="true"
            label="Apelido :"
            formControlName="apelido"
            [minLength]="2"
            [maxLength]="20">
        </sc-input>
    </ss-grid-col>
</sc-form>

***/
