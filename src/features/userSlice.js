import {  createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counter/counterAPI';



export const userSlice = createSlice({
  name: 'user',
  initialState:{ 
    user:null,

  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action ) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },


});
export const {login, logout} = userSlice.actions;
export const selectUser = state => state.user.user;


// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// export const selectCount = (state) => state.counter.value;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
