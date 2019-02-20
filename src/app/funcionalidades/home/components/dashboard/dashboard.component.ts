import { Component, OnInit } from '@angular/core';

declare var gertecEPOS700;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }

    public imprimir() {
        gertecEPOS700.imprimir('Teste Gilluan', function(success) {
            alert('Execucao da chamada');
            console.log('final execucao sucesso', success);
        }, function(error) {
            console.log('final execucao error', error);
        });
    }

}
