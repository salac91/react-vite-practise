import axios from 'axios';
import { Dispatch } from 'redux';
import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";

export const getQuestion = (id: number) => {
	return async (dispatch: Dispatch<QuestionAction>) => {
		dispatch({
			type: QuestionActionType.FETCH_QUESTION_PENDING
		});

		try {
			const { data } = await axios.get(`http://localhost:5000/questions/${id}`);

			dispatch({
        type: QuestionActionType.FETCH_QUESTION_SUCCESS,
        payload: data  
			});

		} catch(err: any) {
			dispatch({
        type: QuestionActionType.FETCH_QUESTION_FAILURE,
        payload: err.message
			});
		}
	}
} 