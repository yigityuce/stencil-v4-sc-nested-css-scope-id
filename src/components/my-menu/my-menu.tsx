import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'my-menu.scss',
  shadow: false,
  scoped: true
})
export class MyMenu {
  render() {
    return <my-popover><slot /></my-popover>;
  }
}
