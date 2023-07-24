// Setup user slice here

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from './../axios.js'

export const questionnaireAnswers = createAsyncThunk('user/questionnaire', async (params) => {
  const { data } = await axios.post('/questionnaire/', params)
  return data
})

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const { data } = await axios.get('/questionnaire/')
  return data
})

const initialState = {
  data: null,
  status: 'loading',
  modalOpen: true,
  filteredUsers: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload
    },
  },
  extraReducers: {
    [questionnaireAnswers.pending]: (state) => {
      state.data = null
      state.status = 'loading'
    },
    [questionnaireAnswers.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    },
    [questionnaireAnswers.rejected]: (state) => {
      state.data = null
      state.status = 'error'
    },
    [fetchUsers.pending]: (state) => {
      state.filteredUsers = null
      state.status = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
      state.status = 'loaded'
    },
    [fetchUsers.rejected]: (state) => {
      state.filteredUsers = null
      state.status = 'error'
    },
  },
})

export const modalOpenSelector = (state) => state.user.modalOpen
export const usersSelector = (state) => state.user.users

export const userReducer = userSlice.reducer

export const { setModalOpen } = userSlice.actions
