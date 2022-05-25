import {GET_SAMPLE, GET_SAMPLE_ERROR, GET_SAMPLE_SUCCESS} from "../reducer/sampleReducer";
import {call, put, takeEvery} from 'redux-saga/effects'
import {getSampleData} from "../api/sample";

export const getSampleSaga = () => ({type: GET_SAMPLE});

function* loadSampleSaga() {
    try {
        const data = yield call(getSampleData);
        yield put({
            type:GET_SAMPLE_SUCCESS,
            data
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: GET_SAMPLE_ERROR,
            error: e
        });
    }
}

export default function* sampleSaga(){
    yield takeEvery(GET_SAMPLE,loadSampleSaga);
}
