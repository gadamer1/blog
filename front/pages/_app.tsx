import React from "react";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";
import AppLayout from "../Layouts/AppLayout";

interface appProps {
  Component: React.ComponentType;
  store: Store;
  pageProps: any;
}

const Blog: React.FC<appProps> = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>가다머의 블로그</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

// FOR REDUX DEVTOOLS EXTENSION
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.subscribe(() => {
    console.dir("상태 변경");
    console.dir(store.getState());
  });
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Blog));
