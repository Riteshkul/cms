// actions.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const addEditorAction = (action) => ({
  type: 'ADD_EDITOR_ACTION',
  payload: action,
});

export const addContent = (content) => ({
  type: 'ADD_CONTENT',
  payload: content,
});

export const updateContent = (index, newContent) => ({
  type: 'UPDATE_CONTENT',
  payload: { index, newContent },
});
