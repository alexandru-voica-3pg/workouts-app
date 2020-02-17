import { takeEvery, take, call, put, all, select } from 'redux-saga/effects';
import { actions } from './actions';
import * as actionCreators from './actionCreators';
import { fetchAllExercises, fetchExerciseDetails } from '../api';

const getNextPage = state => state.nextPage;

function* handleGetExercisesSaga() {
	yield put(actionCreators.fetchStatusPending());
	try {
		const page = yield select(getNextPage);
		const exercises = yield call(fetchAllExercises, page);
		yield put(actionCreators.fetchStatusSuccess());
		yield put(actionCreators.addExerciseBatch(exercises));
	} catch (error) {
		yield put(actionCreators.fetchStatusError());
		console.log(error);
	}
}

function* watchGetExercisesSaga() {
	// this saga uses non-blocking effects
	yield takeEvery(actions.exercises.GET_ALL, handleGetExercisesSaga);
	yield takeEvery(actions.exercises.LOAD_MORE, handleGetExercisesSaga);
}

function* handleGetExerciseDetailsSaga(id: any) {
	try {
		const info = yield call(fetchExerciseDetails, id);
		yield put(actionCreators.addExercise(info));
	} catch (error) {
		console.log(error.message);
	}
}

function* watchGetExerciseDetailsSaga() {
	while (true) {
		const { id } = yield take(actions.exercises.GET_ONE);
		yield call(handleGetExerciseDetailsSaga, id);
	}
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
	yield all([
		watchAuthSaga(),
		watchGetExercisesSaga(),
		watchGetExerciseDetailsSaga()
	]);
}
