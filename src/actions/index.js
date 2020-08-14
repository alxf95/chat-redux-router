import axios from 'axios';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export const fetchMessages = channel => {
  const promise = axios
    .get(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.data.messages);

  return { type: FETCH_MESSAGES, payload: promise };
};

export const createMessage = (channel, author, content) => {
  const body = { channel, author, content };
  const promise = axios
    .post(`https://wagon-chat.herokuapp.com/${channel}/messages`, body)
    .then(response => response.data);

  return { type: CREATE_MESSAGE, payload: promise };
};

export const selectChannel = selectedChannel => {
  return {
    type: SELECT_CHANNEL,
    payload: selectedChannel,
  };
};
