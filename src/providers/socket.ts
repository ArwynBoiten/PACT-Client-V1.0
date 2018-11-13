/// <reference path="../../typings/globals/socket.io-client/index.d.ts"/>
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

/*
 Generated class for the Backend provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SocketProvider {

  public static url: string = "http://localhost:3010";
  public static socket: SocketIOClient.Socket;

  public static establish(cb) {
    SocketProvider.socket = io(SocketProvider.url, {
      transports:['websocket'],
      secure: true,
      reconnection: true,
      reconnectionDelay: 5000,
    });
    SocketProvider.socket.on("connect", cb);
  }

}
