import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'my-timepicker',
  styleUrl: 'my-timepicker.scss',
  shadow: false,
  scoped: true,
})
export class MyTimepicker {
  render() {
    return (
      <Fragment>
        <my-input />
        <my-menu>
          <div
            style={{
              backgroundColor: '#ff9',
              width: '100%',
              boxSizing: 'border-box',
              padding: '0px',
              margin: '0px',
              border: '1px solid black',
            }}
          >
            <slot />
          </div>
        </my-menu>
      </Fragment>
    );
  }
}
