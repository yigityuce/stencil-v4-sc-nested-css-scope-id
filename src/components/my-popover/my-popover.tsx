import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-popover',
  styleUrl: 'my-popover.scss',
  shadow: false,
  scoped: true
})
export class MyPopover {
  render() {
    return <div><slot /></div>;
  }
}
