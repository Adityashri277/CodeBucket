import { configureStore } from '@reduxjs/toolkit'
import codebucketReducer from './redux/codebucketSlice'

export default configureStore({
  reducer: {
    codebucket: codebucketReducer
  }
})