import axios from 'axios';
import { Dispatch } from 'redux';
import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";

export const getQuestions = () => {
	return async (dispatch: Dispatch<QuestionAction>) => {
		dispatch({
			type: QuestionActionType.FETCH_QUESTIONS_PENDING
		});

		try {
			const { data } = await axios.get('http://localhost:5000/questions');

			dispatch({
        type: QuestionActionType.FETCH_QUESTIONS_SUCCESS,
        payload: data  
			});

		} catch(err: any) {
			dispatch({
        type: QuestionActionType.FETCH_QUESTIONS_FAILURE,
        payload: err.message
			});
		}
	}
} 