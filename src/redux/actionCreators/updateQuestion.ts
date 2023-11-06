import axios from 'axios';
import { Dispatch } from 'redux';
import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";
import { Question } from '../../models/Question';

export const updateQuestion = (question: Question) => {
	return async (dispatch: Dispatch<QuestionAction>) => {
		dispatch({
			type: QuestionActionType.UPDATE_QUESTION_PENDING
		});

		try {
			const { data } = await axios.put(`http://localhost:5000/questions/${question.id}`, question);

			dispatch({
        type: QuestionActionType.UPDATE_QUESTION_SUCCESS,
        payload: data  
			});

		} catch(err: any) {
			dispatch({
        type: QuestionActionType.UPDATE_QUESTION_FAILURE,
        payload: err.message
			});
		}
	}
}
