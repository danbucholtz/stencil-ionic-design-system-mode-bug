import { Component,  h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: {
    msb: 'my-component.msb.css',
    bch: 'my-component.bch.css'
  },
  shadow: true
})
export class MyComponent {


  render() {
    return (
      <ion-button>Hello I'm a button</ion-button>
      /*<ion-app>Hello, I'm a broken app</ion-app>*/
    )
  }
}
