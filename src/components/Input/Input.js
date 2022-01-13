import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Input.css';
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {fetchData, fetchFilm, inputChange} from "../../store/actions";
import axios from 'axios';
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

const Input = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const films = useSelector(state => state.films);
    const input = useSelector(state => state.input);

    const InputChange = (value) => {
        dispatch(inputChange(value));
    };

    const fetchFilms= async () => {
        const data = await axios.get(`http://api.tvmaze.com/shows`);
        dispatch(fetchData(data.data));
    };

    const getFilm = async () => {
        if (input) {
            history.push(`/shows/${input}`);
        }
        const data = await axios.get(`http://api.tvmaze.com/search/shows?q=${input}`);
        dispatch(fetchFilm(data.data));
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <div className="container">
            <div className="container-inner">
                <div className="input">
                    <form>
                        <label htmlFor="input">Search for TV Show:</label>
                        <Autocomplete
                            disableClearable
                            options={films.map((option) => option.name)}
                            onChange={(e, value) => InputChange(value)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="TV Show"
                                    variant="outlined"
                                    InputProps={{...params.InputProps, type: 'search'}}
                                />
                            )}
                        />
                        <Button onClick={getFilm} variant="contained" style={{marginTop: "10px"}}>Show</Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Input;