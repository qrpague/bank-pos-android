import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { OperacoesService } from 'src/app/services/operacoes.service';
@Component({
  selector: 'app-show-qr-code',
  templateUrl: './show-qr-code.component.html',
  styleUrls: ['./show-qr-code.component.css']
})
export class ShowQrCodeComponent implements OnInit {

  constructor(
    private router: Router,
    private operacoesService: OperacoesService,
    private route: ActivatedRoute) { }

  public linkPagamento: string;
  public valor: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.linkPagamento = `${params.get('codigo')}`;

      this.valor = `${environment.rest_url}/operacoes/${params.get('valor')}`.match(/[^\/]+$/g)[0]
    });

    this.aguardarConfirmacaoPagamento().subscribe(sucesso => {
      this.router.navigate(['/sucesso-pagamento']);
    });
  }

  aguardarConfirmacaoPagamento(): Observable<any> {

    return Observable.create((observer) => {

      this.operacoesService.initSocket();

     this.operacoesService.onMessage().subscribe(event => observer.next(event));

    });

  }

}
