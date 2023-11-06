import axios from 'axios';
import { Dispatch } from 'redux';
import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";
import { Question } from '../../models/Question';

export const addQuestion = (question: Question) => {
	return async (dispatch: Dispatch<QuestionAction>) => {
		dispatch({
			type: QuestionActionType.ADD_QUESTION_PENDING
		});

		try {
			const { data } = await axios.post(`http://localhost:5000/questions`, question);

			dispatch({
        type: QuestionActionType.ADD_QUESTION_SUCCESS,
        payload: data  
			});

		} catch(err: any) {
			dispatch({
        type: QuestionActionType.ADD_QUESTION_FAILURE,
        payload: err.message
			});
		}
	}
}
