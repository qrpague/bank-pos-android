import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso-pagamento',
  templateUrl: './sucesso-pagamento.component.html',
  styles: [`


  `]
})
export class SucessoPagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltarInicio(): void {
    this.router.navigate(['']);
  }

}
