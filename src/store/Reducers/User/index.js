const initialState = {
  authenticated: null,
  data: {},
};

const userReducer = (state = initialState, action) => {
  Object.assign(state, action.payload);

  switch (action.type) {
    case 'PROFILE_DATA_UPDATE':
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case 'PROFILE_UPDATE':
      return {
        ...state,
        ...action.payload,
        data: {
          ...state.data,
          ...action.payload.data,
        },
      };
    case 'LOGIN_SESSION':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT_SESSION':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
