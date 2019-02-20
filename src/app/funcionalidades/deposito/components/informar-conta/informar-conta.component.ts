import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informar-conta',
  templateUrl: './informar-conta.component.html',
  styleUrls: ['./informar-conta.component.css']
})
export class InformarContaComponent implements OnInit {

  public formInformarConta: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}


  ngOnInit() {
    this.formInformarConta = this.fb.group({
      numeroConta: ['', Validators.required]
    });
  }

  consultar() {
    console.log(this.formInformarConta.controls.numeroConta.value);
    this.router.navigate(['/depositos/dados-deposito']);
  }

}
