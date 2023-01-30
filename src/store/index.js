import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getUserInfoReducer,
  getPostCommentsReducer,
} from "../reducers/ListingPageReducer";

const reducer = combineReducers({
  userInfo: getUserInfoReducer,
  postComments: getPostCommentsReducer,
});

const middleware = [thunk];

const userTokenFromStorage = localStorage.getItem("userToken")
  ? JSON.parse(localStorage.getItem("userToken"))
  : null;

const initialState = {
  user: { userData: userTokenFromStorage },
};

const storeUser = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default storeUser;
