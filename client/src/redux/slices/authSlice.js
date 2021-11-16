import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from '../../api/authApi'

export const login = createAsyncThunk(
	'auth/login',
	async (data, { rejectWithValue }) => {
		try {
			return await authAPI.login(data)
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

export const signUp = createAsyncThunk(
	'auth/signUp',
	async (data, { rejectWithValue }) => {
		try {
			return await authAPI.register(data)
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {},
	},
	reducers: {},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			// console.log(action.payload.user)
			state.user = action.payload.user
		},
	},
})

export default authSlice.reducer
