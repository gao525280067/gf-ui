export const initialState = { todos: [] };

const reducer = (draft: any, action: any) => {
  switch (action.type) {
    case 'ADD': // 少量可直接用字符串，大量的话统一用常量，方便修改管理
      draft.todos.push(action.id);
      break;
    case 'REMOVE':
      const index = draft.todos.indexOf(action.id);
      index !== -1 && draft.todos.splice(index, 1);
      break;
  }
};

export default reducer;
