// src/tests/AddExperimentCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import AddExperimentCardButton from '../components/AddExperimentButton';

test('renders add experiment module button', () => {
  render(<AddExperimentCardButton />);
  const addButton = screen.getByRole('button', { name: /Add Experiment Module/i });
  expect(addButton).toBeInTheDocument();
});


