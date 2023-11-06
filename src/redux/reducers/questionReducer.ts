import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";
import { Question } from '../../models/Question';

const initialState = {
  questions: [],
  question: {
    title: '',
    content: '',
    field: '',
    createdBy: '',
    createdAt: ''
  },
  loading: false,
  error: '',
  redirect: false
};

interface State {
  questions: Question[],
  question: Question,
  loading: boolean,
  error: string,
  redirect: boolean
}

const taskReducer = (state: State = initialState, action: QuestionAction) => {
  switch (action.type) {
    case QuestionActionType.FETCH_QUESTIONS_PENDING:
    case QuestionActionType.FETCH_QUESTION_PENDING:
    case QuestionActionType.UPDATE_QUESTION_PENDING:
      return {
        ...state,
        loading: true
      };
    case QuestionActionType.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case QuestionActionType.FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        loading: false
      };
    case QuestionActionType.UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload
      };
    case QuestionActionType.ADD_QUESTION_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, action.payload],
        redirect: true
      };
    case QuestionActionType.RESET_QUESTION:
      return {
        ...state,
        question: {
          title: '',
          content: '',
          field: '',
          createdBy: '',
          createdAt: ''
        }
      };
    case QuestionActionType.FETCH_QUESTIONS_FAILURE:
    case QuestionActionType.FETCH_QUESTION_FAILURE:
    case QuestionActionType.UPDATE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default taskReducer;