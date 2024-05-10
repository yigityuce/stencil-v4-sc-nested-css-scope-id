import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-list-item',
  styleUrl: 'my-list-item.scss',
  shadow: false,
  scoped: true,
})
export class MyListItem {
  render() {
    return (
      <span>
        <slot />
      </span>
    );
  }
}
