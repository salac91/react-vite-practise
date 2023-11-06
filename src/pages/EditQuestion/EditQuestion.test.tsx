import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk'
import EditQuestion from './index';

const mockStore = configureStore([thunkMiddleware]);

test('render correctly', () => {

  const store = mockStore({
    questions: {
      question: 
      {
        id: 1,
        title: 'Test question',
        content: 'How much is 3 * 3?',
        field: 'Mathematics',
        createdBy: 'Alex',
        createdAt: '22-01-2023'
      }
    },
  });

  render(
    <Provider store={store}>
      <EditQuestion />
    </Provider>
  , { wrapper: BrowserRouter });

    const titleElement = screen.getByText('Edit question');
    expect(titleElement).toBeInTheDocument();

    const titleInputElement = screen.getByDisplayValue('Test question')
    expect(titleInputElement).toBeInTheDocument();

    const contentInputElement = screen.getByDisplayValue('How much is 3 * 3?')
    expect(contentInputElement).toBeInTheDocument();

    const fieldInputElement = screen.getByDisplayValue('Mathematics')
    expect(fieldInputElement).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: 'Submit' })
    expect(submitBtn).toBeInTheDocument();
});
