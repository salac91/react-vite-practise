import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import AddQuestion from './index';

test('render correctly', () => {
  render(
    <Provider store={store}>
      <AddQuestion />
    </Provider>
  , { wrapper: BrowserRouter });

  const titleElement = screen.getByText('Add question');
  expect(titleElement).toBeInTheDocument();

  const titleInputElement = screen.getByPlaceholderText('Title')
  expect(titleInputElement).toBeInTheDocument();

  const contentInputElement = screen.getByPlaceholderText('Content')
  expect(contentInputElement).toBeInTheDocument();

  const fieldInputElement = screen.getByPlaceholderText('Field')
  expect(fieldInputElement).toBeInTheDocument();

  const submitBtn = screen.getByRole('button', { name: 'Submit' })
  expect(submitBtn).toBeInTheDocument();
});
