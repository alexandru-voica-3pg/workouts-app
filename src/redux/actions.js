export const status = {
	pending: 0,
	success: 1,
	error: 2
};

export const actions = {
	auth: {
		LOGIN: 'LOGIN',
		LOGOUT: 'LOGOUT'
	},
	exercises: {
		GET_ALL: 'EXERCISES_GET_ALL',
		FETCH_PENDING: 'EXERCISES_FETCH_PENDING',
		FETCH_SUCCESS: 'EXERCISES_FETCH_SUCCESS',
		FETCH_ERROR: 'EXERCISES_FETCH_ERROR',
		ADD_MULTIPLE: 'EXERCISES_ADD_MULTIPLE'
	}
};
