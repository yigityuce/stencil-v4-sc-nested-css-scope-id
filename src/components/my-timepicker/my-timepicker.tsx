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
          <ul
            style={{
              backgroundColor: '#ff9',
              width: '100%',
              boxSizing: 'border-box',
              padding: '0px',
              margin: '0px',
              listStyle: 'none',
              border: '1px solid black',
            }}
          >
            <li>00:00</li>
            <li>03:00</li>
            <li>06:00</li>
            <li>09:00</li>
            <li>12:00</li>
            <li>15:00</li>
            <li>18:00</li>
            <li>21:00</li>
          </ul>
        </my-menu>
      </Fragment>
    );
  }
}
