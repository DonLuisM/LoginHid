
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    verEmailSave: true,
    verCodigo: false,
    verNewPass: false,
    loadingUI: false,
    aprobado: false,
    verModal: false,
    uiError: []
  }
  
  export const UIVisibleSlice = createSlice({
    name: 'UIVisible',
    initialState,
    reducers: {
      uiPending: (state) => {
        state.loadingUI = true
      },
      uiRecuperarEmail: (state) => {
        state.loadingUI = false
        state.uiError = [];
        state.verEmailSave = true;
        state.verCodigo = false;
        state.verNewPass = false;
      },
      uiEnviarCodigo: (state) => {
        state.loadingUI = false
        state.uiError = [];
        state.verEmailSave = false;
        state.verCodigo = true;
        state.verNewPass = false;
      },
      uiNuevaContrasena: (state) => {
        state.loadingUI = false
        state.uiError = [];
        state.verEmailSave = false;
        state.verCodigo = false;
        state.verNewPass = true;
      },
      apiVerModal: (state) => {
        state.verModal = true
      },
      apiCloseModal: (state) => {
        state.verModal = false
      },
      uiError: (state, action) => {
        state.loadingUI = false;
        state.uiError = action.payload;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { uiError, uiClearError, uiPending, uiEnviarCodigo, 
    uiRecuperarEmail, uiNuevaContrasena, apiCloseModal, apiVerModal } = UIVisibleSlice.actions;
  
  //Selectors 
  export const selectVerEmail = (state) => state.UIVisible.verEmailSave;
  export const selectVerCodigo = (state) => state.UIVisible.verCodigo;
  export const selectVerNewPass = (state) => state.UIVisible.verNewPass;
  export const selectVerModal = (state) => state.UIVisible.verModal;
  export const selectUiError = (state) => state.UIVisible.uiError;
  
  export const selectLoadingUi = (state) => state.UIVisible.loadingUI;
  
  export const selectAprobado = (state) => state.UIVisible.aprobado;
  
  export default UIVisibleSlice.reducer;