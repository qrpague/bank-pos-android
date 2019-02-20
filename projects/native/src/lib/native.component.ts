import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-native',
  template: `
    <p>
      native works!
    </p>
  `,
  styles: []
})
export class NativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
