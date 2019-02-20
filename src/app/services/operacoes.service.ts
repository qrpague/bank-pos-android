import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from './web-socket.service';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  private _subjectOnMessage = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    ),
    responseType: 'text'
  };

  _onMessage: Subject<any> = new Subject<any>();

  constructor(private wsService: WebsocketService,
    private http: HttpClient) {



  }

  private socket;
  private connection;

  public initSocket(): void {
    const url = `${environment.websocket_url}/?idTerminal=${environment.idTerminal}`;
    /*    this.socket = socketIo(url);

       this.socket.on('connection', console.log); */

    this.connection = new WebSocket(url);

    this.connection.onopen = (event) => {
      console.log('Connection opened');
    };

    this.connection.onclose = (event) => {
      this.initSocket();
      console.log('Connection closed');
    };

    this.connection.onerror = (event) => {
      console.error('Connection error');
    };

    this.connection.onmessage = (event) => {
      console.log('message received');
      this._onMessage.next(event);
    };


  }


  public onMessage(): Observable<any> {
    return this._onMessage.asObservable();
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }




  informarValor(payload: any) {
    return this.http.post(`${environment.rest_url}/loja/qrcode`, payload, this.httpOptions as any)
      .pipe(
        catchError(this.handleError<any>('operacoes/informar-valor'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
