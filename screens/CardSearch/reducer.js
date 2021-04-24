export const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA_INIT':
      return {...state, error: null, isLoading: true};
    case 'FETCH_DATA_ERROR':
      return {...state, error: action.payload, isLoading: false};
    case 'FETCH_DATA_SUCCESS':
      return {...state, data: action.payload, isLoading: false};
    default:
      throw new Error('Invalid action type');
  }
}
