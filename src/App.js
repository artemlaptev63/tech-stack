import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Header from "./components/common/Header";
import LibraryList from "./components/LibraryList";

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerTitle="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
