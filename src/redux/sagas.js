import { takeEvery, take, call, put, all } from 'redux-saga/effects';
import { actions } from './actions';
import * as actionCreators from './actionCreators';
import { fetchExercises } from '../api';

function* handleGetExercisesSaga() {
	yield put(actionCreators.fetchStatusPending());
	try {
		const exercises = yield call(fetchExercises);
		yield put(actionCreators.fetchStatusSuccess());
		yield put(actionCreators.addExerciseBatch(exercises));
	} catch (error) {
		yield put(actionCreators.fetchStatusError());
	}
}

function* watchGetExercisesSaga() {
	// this saga uses non-blocking effects
	yield takeEvery(actions.exercises.GET_ALL, handleGetExercisesSaga);
}

function* handleLoginSaga() {
	console.log('logged in');
}

function* handleLogoutSaga() {
	console.log('logged out');
}

function* watchAuthSaga() {
	// this saga uses blocking effects
	const loginInfo = yield take('LOGIN');
	yield call(handleLoginSaga);
	yield take('LOGOUT'); // will not be handled unless the user has logged in
	yield call(handleLogoutSaga);
}

export function* rootSaga() {
	console.log('root saga');
	yield all([watchAuthSaga(), watchGetExercisesSaga()]);
}
