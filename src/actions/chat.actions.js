import * as C from '../constants/actions';

export const questionAnswered = req => ({ type: C.QUESTION_ANSWERED, ...req });

