const initialState = {
  show: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        ...action.payload,
      };
    case 'HIDE_MODAL':
      return { ...initialState };
    default:
      return initialState;
  }
};

export default modalReducer;
