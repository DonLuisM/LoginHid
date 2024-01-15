import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: [],
    error: [],
    email: "",
    token:null,
    autenticado: false,
    preRegistro: false,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    apiPending: (state) => {
      state.loading = true;
    },
    apiSetEmail: (state, action) => {
        state.email = action.payload;
    },
    apiSetAutenticado: (state) => {
        state.autenticado = true;
    },
    apiOffAutenticado: (state) => {
        state.autenticado = false
    },
    apiSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
    apiSuccessToken: (state, action) => {
        state.loading = false;
        state.token = action.payload;
    },
    apiError: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    apiClearError: (state) => {
        state.error = [];
    },
    apiSetPreRegistro: (state, action) => {
        state.loading = false;
        state.preRegistro = true;
    }
},
})

// Action creators are generated for each case reducer function
export const { apiSetPreRegistro, apiPending, apiOffAutenticado, apiSetAutenticado, apiSuccess, 
    apiError, apiSuccessToken, apiClearError, apiSetEmail } = dataSlice.actions;

//Selectors 
export const selectLoading = (state) => state.data.loading;
export const selectData = (state) => state.data.data;
export const selectError = (state) => state.data.error;
export const selectEmail = (state) => state.data.email;
export const selectToken = (state) => state.data.token;
export const selectAutenticado = (state) => state.data.autenticado;
export const selectPreRegistro = (state) => state.data.preRegistro;
    
export default dataSlice.reducer;