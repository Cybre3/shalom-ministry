import { combineReducers } from 'redux';
import bugsReducers from './bugs';
import projectsReducer from './projects';
import usersReducer from './users';
import emailsReducer from './emails';

export default combineReducers({
  bugs: bugsReducers,
  projects: projectsReducer,
  users: usersReducer,
  emails: emailsReducer
});
