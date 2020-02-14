import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('lists are rendered', () => {
  const { getByLabelText } = render(<Display />);
  getByLabelText(/name/i);
  getByLabelText(/team/i);
  getByLabelText(/searches/i);
});


