import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signin = (dispatch) => {};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin },
  { isSignedIn: false },
);
