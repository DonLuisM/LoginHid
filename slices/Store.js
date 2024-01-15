
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../slices/dataSlice'
import UIVisibleReducer from '../slices/UISlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    UIVisible: UIVisibleReducer,
  },
})