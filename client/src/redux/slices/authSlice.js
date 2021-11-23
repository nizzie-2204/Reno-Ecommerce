import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI from '../../api/authApi'
import { getAllUser } from '../slices/userSlice'

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
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await authAPI.register(data)

			dispatch(getAllUser())

			return result
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
	reducers: {
		clearUser: (state) => {
			state.user = {}
		},
	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			// console.log(action.payload.user)
			state.user = action.payload.user
		},
	},
})

export const { clearUser } = authSlice.actions
export default authSlice.reducer
