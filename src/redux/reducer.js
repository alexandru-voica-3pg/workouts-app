import { combineReducers } from 'redux';
import { actions } from './actions';

export const fetchStatus = {
	pending: 0,
	success: 1,
	error: 2
};

const statusInitialState = null;

const statusReducer = (state = statusInitialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case actions.exercises.FETCH_PENDING:
			return fetchStatus.pending;
		case actions.exercises.FETCH_SUCCESS:
			return fetchStatus.success;
		case actions.exercises.FETCH_ERROR:
			return fetchStatus.error;
		default:
			return state;
	}
};

const authInitialState = false;

const authReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case actions.auth.LOGIN:
			if ('data' in action) {
				return true;
			}
			break;
		case actions.auth.LOGOUT:
			return false;
		default:
			return state;
	}
};

const exercisesInitialState = [];

const exercisesReducer = (state = exercisesInitialState, action) => {
	switch (action.type) {
		case actions.exercises.ADD_MULTIPLE:
			return [...state, ...action.exercises];
		default:
			return state;
	}
};

const pageInitialState = 0;

const pageReducer = (state = pageInitialState, action) => {
	switch (action.type) {
		case actions.exercises.GET_ALL:
		case actions.exercises.LOAD_MORE:
			return state + 1;
		default:
			return state;
	}
};

const exerciseDetailsInitialState = {};

const exerciseDetailsReducer = (
	state = exerciseDetailsInitialState,
	action
) => {
	switch (action.type) {
		case actions.exercises.ADD_ONE:
			return action.info;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	status: statusReducer,
	auth: authReducer,
	exercises: exercisesReducer,
	nextPage: pageReducer,
	exerciseDetails: exerciseDetailsReducer
});
