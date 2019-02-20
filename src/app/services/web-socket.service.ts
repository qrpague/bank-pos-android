import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';



import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WebsocketService {

  // Our socket connection
  private socket;

  constructor() { }

  connect(): Subject<any> {
    this.socket = io(environment.websocket_url);
    const observable = Observable.create((obs) => {
      this.socket.on('connection', (data) => {
        console.log('Received message from Websocket Server');
        obs.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return Subject.create({
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      },
    }, observable);
  }

}
