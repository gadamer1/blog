import React, { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

export const JWTlogin = ({ token }) => {
  cookie.set("X-Access-Token", token, { expires: 1 });
  Router.push("/");
};

export const JWTauth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/login");
  }

  return token;
};

export const JWTlogout = () => {
  cookie.remove("X-Access-Token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now().toString());
};

export const JWTwithAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === "logout") {
        console.log("logged out from storage");
        Router.push("login");
      }
    };
    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const token = JWTauth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};
