import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk'
import Home from './index';

const mockStore = configureStore([thunkMiddleware]);

test('render correctly', () => {

  const store = mockStore({
    questions: {
      questions: [
        {
          id: 1,
          title: 'Test question',
          content: 'How much is 3 * 3?',
          field: 'Mathematics',
          createdBy: 'Alex',
          createdAt: '22-01-2023'
        }
      ],
      loading: false
    },
  });

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  , { wrapper: BrowserRouter });

  const titleElement = screen.getByText('Questions List');

  expect(titleElement).toBeInTheDocument();
});
