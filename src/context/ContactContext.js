import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return action.payload;
    case 'EDIT_CONTACT':
      return state.map((Contact) =>
        Contact.id === action.payload.id ? action.payload : Contact,
      );
    /*     case 'ADD_POST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
 */
    case 'DELETE_CONTACT':
      return state.filter((Contact) => Contact.id !== action.payload);
    default:
      return state;
  }
};

const getContacts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/Contacts');
    dispatch({ type: 'GET_POSTS', payload: response.data });
  };
};

const addContact = (dispatch) => {
  return (title, content, callback) => {
    jsonServer.post('/contacts', { title, content });
    // dispatch({ type: 'ADD_POST', payload: { title, content } });
    if (callback) callback();
  };
};

const deleteContact = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/contacts/${id}`);

    dispatch({ type: 'DELETE_POST', payload: id });
  };
};

const editContact = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/contacts/${id}`, { title, content });
    dispatch({ type: 'EDIT_POST', payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  contactReducer,
  { addContact, deleteContact, editContact, getContacts },
  [],
);
