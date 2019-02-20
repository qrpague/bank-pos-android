import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { noop } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-informar-valor',
  templateUrl: './informar-valor.component.html',
  styleUrls: ['./informar-valor.component.css']
})
export class InformarValorComponent implements OnInit {

  payloadInicial: any = {
    'versao': 1,
      'cnpjInstituicao': '01234567890123',
      'uuid': '3d0ca315-aff9–4fc2-be61–3b76b9a2d799',
      'valor': 12325,
      'descricao': 'Pagamento do serviço de Advocacia na Meu escritório de advogados.',
      'dataHoraSolicitacao': '2017-07-21T17:32:28Z',
      'dataHoraVencimento': '2017-07-21T17:32:28Z',
      'dataHoraEfetivacao': '2017-07-21T17:32:28Z',
      'tipoOperacao': 'PAGAMENTO',
      'situacao': 'ABERTO',
      'callback': 'http://204.48.27.105:9093/loja/qrcode/notification',
      'terminal': {
          'idTerminal': environment.idTerminal,
          'descricao': 'Terminal b9384 ',
          'uf': 'DF',
          'cep': '70000-000',
          'latitudeTerminal': '-15.7801',
          'longitudeTerminal': '-47.9292'
      },
      'itens': [],
      'beneficiario': {}
  };



  public formInformarConta: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private operacoesService: OperacoesService
  ) { }


  ngOnInit() {
    this.formInformarConta = this.fb.group({
      valor: ['', Validators.required]
     });
  }

  gerarQrCode() {
      const valor = this.formInformarConta.controls.valor.value;
      this.operacoesService.informarValor({
        ...this.payloadInicial,
        valor
      }
    )
     .subscribe(result => {
       if (!result) {
         alert('Erro na requisição!');
       } else {
        this.router.navigate(['/show-qr-code', result, valor]);
       }
     }, console.log);
    /*
      this.operacoesService.salvar({})
      .subscribe(console.log);
        this.operacoesService.informarValor(this.payloadInicial).subscribe(result => {

        });
        */
  }


}
