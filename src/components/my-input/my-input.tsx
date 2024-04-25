import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.scss',
  shadow: false,
  scoped: true
})
export class MyInput {
  render() {
    return <input type='text' />;
  }
}
