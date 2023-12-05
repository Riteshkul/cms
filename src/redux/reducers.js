// reducers.js
const initialState = {
  user: null,
  editorActions: [],
  content: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'ADD_EDITOR_ACTION':
      return { ...state, editorActions: [...state.editorActions, action.payload] };
    case 'ADD_CONTENT':
      return { ...state, content: [...state.content, action.payload] };
    case 'UPDATE_CONTENT':
      const { index, newContent } = action.payload;
      const updatedContent = [...state.content];
      updatedContent[index] = newContent;
      return { ...state, content: updatedContent };
    default:
      return state;
  }
};

export default rootReducer;
