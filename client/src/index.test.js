import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
    // Arrange
    const { getByText } = render(<App />);
  
    // Act
    const header = getByText(/women's/i);
  
    // Assert
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).not.toBeFalsy();
  });