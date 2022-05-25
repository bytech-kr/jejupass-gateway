export const GET_SAMPLE = 'GET_SAMPLE';
export const GET_SAMPLE_SUCCESS = 'GET_SAMPLE_SUCCESS';
export const GET_SAMPLE_ERROR = 'GET_SAMPLE_ERROR';

const initialState = [];

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SAMPLE :
            return {
                ...state,
                loading: true,
                data: null,
                error: null,
            }
        case GET_SAMPLE_SUCCESS :
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            }
        case GET_SAMPLE_ERROR:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.error
            }
        default :
            return state;
    }
}
