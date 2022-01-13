export const FETCH_DATA = "FETCH_DATA";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const FETCH_FILM = "FETCH_FILM";

export const fetchData = payload => ({type:FETCH_DATA,  payload});
export const inputChange = payload => ({type: INPUT_CHANGE, payload});
export const fetchFilm = payload => ({type:FETCH_FILM,  payload});