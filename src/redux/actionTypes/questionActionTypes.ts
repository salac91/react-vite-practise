import { Question } from '../../models/Question';

export enum QuestionActionType {
  FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS_PENDING',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE',
  FETCH_QUESTION_PENDING = 'FETCH_QUESTION_PENDING',
  FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS',
  FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE',
  ADD_QUESTION_PENDING = 'ADD_QUESTION_PENDING',
  ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS',
  ADD_QUESTION_FAILURE = 'ADD_QUESTION_FAILURE',
  UPDATE_QUESTION_PENDING = 'UPDATE_QUESTION_PENDING',
  UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS',
  UPDATE_QUESTION_FAILURE = 'UPDATE_QUESTION_FAILURE',
  RESET_QUESTION = 'RESET_QUESTION'
}

interface actionFetchQuestionsPending {
  type: QuestionActionType.FETCH_QUESTIONS_PENDING;
}

interface actionFetchQuestionsSuccess {
  type: QuestionActionType.FETCH_QUESTIONS_SUCCESS;
  payload: [Question];
}

interface actionFetchQuestionsFailure {
  type: QuestionActionType.FETCH_QUESTIONS_FAILURE;
  payload: string;
}

interface actionFetchQuestionPending {
  type: QuestionActionType.FETCH_QUESTION_PENDING;
}

interface actionFetchQuestionSuccess {
  type: QuestionActionType.FETCH_QUESTION_SUCCESS;
  payload: Question;
}

interface actionFetchQuestionFailure {
  type: QuestionActionType.FETCH_QUESTION_FAILURE;
  payload: string;
}

interface actionAddQuestionPending {
  type: QuestionActionType.ADD_QUESTION_PENDING;
}

interface actionAddQuestionSuccess {
  type: QuestionActionType.ADD_QUESTION_SUCCESS;
  payload: Question;
}

interface actionAddQuestionFailure {
  type: QuestionActionType.ADD_QUESTION_FAILURE;
  payload: string;
}

interface actionUpdateQuestionPending {
  type: QuestionActionType.UPDATE_QUESTION_PENDING;
}

interface actionUpdateQuestionSuccess {
  type: QuestionActionType.UPDATE_QUESTION_SUCCESS;
  payload: Question;
}

interface actionUpdateQuestionFailure {
  type: QuestionActionType.UPDATE_QUESTION_FAILURE;
  payload: string;
}

interface actionResetQuestion {
  type: QuestionActionType.RESET_QUESTION;
}

export type QuestionAction = actionFetchQuestionsPending | actionFetchQuestionsSuccess | actionFetchQuestionsFailure
  | actionFetchQuestionPending | actionFetchQuestionSuccess | actionFetchQuestionFailure
  | actionAddQuestionPending | actionAddQuestionSuccess | actionAddQuestionFailure
  | actionUpdateQuestionPending | actionUpdateQuestionSuccess | actionUpdateQuestionFailure | actionResetQuestion;
