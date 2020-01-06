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
import { NextPage, NextPageContext } from "next";
import axios from "axios";
import { LOAD_USER_REQUEST } from "../reducers/user/actions";

const Blog = ({ Component, store, pageProps }) => {
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

Blog.getInitialProps = async context => {
  let pageProps = {};
  const { ctx, Component } = context;
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : "";
  if (ctx.isServer && cookie) {
    axios.defaults.headers.cookie = cookie;
  }
  if (!state.user.user && cookie) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
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
