import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API_KEY from '../config/apiConstant';

type TProps = {
    value: string;
}
type TApodProps = {
    date: string;
}

const fetchMain = createAsyncThunk(
    'main/fetchAll',
    async(props: TProps, thunkAPI) => {
        try{
            const response = await axios.get(
                `https://images-api.nasa.gov/search?q=${props.value}
                `
            )
                return response;
        }catch(e){
            return thunkAPI.rejectWithValue(
                'Ошибка загрузки! Повторите попытку позже'
              );
        }
    }
)

const fetchPicture = createAsyncThunk(
    'picture/fetchAll',
    async(props: string, _thunkAPI) => {
        try{
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${props}
                `
            )
                return response;
        }catch(e){
            return _thunkAPI.rejectWithValue(
                'Ошибка загрузки! Повторите попытку позже'
              );
        }
    }
)

export {fetchMain, fetchPicture}