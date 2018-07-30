import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import * as ReactDOM from "react-dom";
import * as ReduxThunk from "redux-thunk";
import * as ReduxLogger from "redux-logger";
import { Root } from "./components/Root/Root";
import { RootState } from "./models/States";
import { apiMiddleware } from "./middleware/api-middleware";
import { rootReducer } from "./reducers";
//import registerServiceWorker from "./actions/registerServiceWorker";

const store: Redux.Store<RootState> = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(
    ReduxThunk.default,
    apiMiddleware(),
    ReduxLogger.createLogger()
  )
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Root />
  </ReactRedux.Provider>,
  document.getElementById("main")
);
//registerServiceWorker();
