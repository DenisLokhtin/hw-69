import {FETCH_DATA, FETCH_FILM, INPUT_CHANGE} from "../store/actions";

const initialState = {
    film: [],
    input: '',
    films: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                films: action.payload
            };
        case INPUT_CHANGE:
            return {
                ...state,
                input: action.payload
            };
        case FETCH_FILM:
            return {
                ...state,
                film: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;