import { Dispatch } from 'redux';
import { QuestionActionType, QuestionAction } from "../actionTypes/questionActionTypes";

export const resetQuestion = () => {
	return async (dispatch: Dispatch<QuestionAction>) => {
		dispatch({
			type: QuestionActionType.RESET_QUESTION
		});
	}
}
