import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

interface LoginProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginProps,
  { rejectValue: string }
>('login/loginByUsername', async (payloadData, thunkApi) => {
  try {
    const { data } = await axios.post<User>(
      'http://localhost:8000/login',
      payloadData
    );
    if (!data) {
      throw Error('No data');
    }
    return data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(
      i18n.t('Вы ввели неверный логин или пароль')
    );
  }
});
