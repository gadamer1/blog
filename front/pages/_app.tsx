import React, { useEffect } from "react";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import reducer from "../reducers";
import rootSaga from "../sagas";
import AppLayout from "../Layouts/AppLayout";
import { store } from "../reducers/types";

interface appProps {
  Component: React.ComponentType;
  store: Store;
  pageProps: any;
}

const Blog: React.FC<appProps> = ({ Component, store, pageProps }) => {
  // for material ui ssr
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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

const configureStore = (initialState: store) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composeEnhancer = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  const enhancer = composeEnhancer(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Blog));
