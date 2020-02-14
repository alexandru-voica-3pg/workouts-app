import { actions } from './actions';

export const login = data => ({
	type: actions.auth.LOGIN,
	data
});

export const logout = () => ({
	type: actions.auth.LOGOUT
});

export const getAllExercises = () => ({
	type: actions.exercises.GET_ALL
});

export const getExerciseDetails = id => ({
	type: actions.exercises.GET_ONE,
	id
});

export const fetchStatusPending = () => ({
	type: actions.exercises.FETCH_PENDING
});

export const fetchStatusSuccess = () => ({
	type: actions.exercises.FETCH_SUCCESS
});

export const fetchStatusError = () => ({
	type: actions.exercises.FETCH_ERROR
});

export const addExerciseBatch = (exercises: Array<any>) => ({
	type: actions.exercises.ADD_MULTIPLE,
	exercises
});

export const addExercise = (exerciseInfo: any) => ({
	type: actions.exercises.ADD_ONE,
	info: exerciseInfo
});
