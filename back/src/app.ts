import express, { Application } from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import mongoose, { mongo } from "mongoose";
import validate from "validate.js";
import { ObjectId } from "bson";
import myLogger from "./utils/logger";
import { getValue } from "./config";

//routes
import postRouteAPI from "./routes/post";
import postsRouteAPI from "./routes/posts";
import userRouteAPI from "./routes/user";
import usersRouteAPI from "./routes/users";

class App {
  public app: Application;

  constructor() {
    // env variable
    dotenv.config();

    // mongodb
    this.mongoDBConfig();
    this.mongoDBInit();
    // express
    this.app = express();
    this.setExpress();
    this.useMiddlewares();
    this.setRoutes();

    // validator
    this.initValidator();
  }

  //mongodb configure
  private mongoDBConfig() {
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
  }

  //mongodb init
  private mongoDBInit() {
    const db = getValue("dbURL");
    myLogger.info("DB", db);
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        myLogger.info("Connected to MONGODB", "app");
      })
      .catch(async err => {
        myLogger.error(err, "app");
        await setTimeout(this.mongoDBInit, 3000);
      });
  }

  // express settings
  private setExpress() {
    this.app.set("trustproxy", 1);
  }

  //routes
  private setRoutes() {
    this.app.use("/api/post", postRouteAPI);
    this.app.use("/api/posts", postsRouteAPI);
    this.app.use("/api/user", userRouteAPI);
    this.app.use("/api/users", usersRouteAPI);
  }

  //middlewares
  private useMiddlewares() {
    this.app.use(express.json({ limit: "50mb" })); //json parsing
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cookieParser(process.env.COOKIE_SECRET));
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(logger("dev"));
    this.app.use(
      (
        err: any,
        req: any,
        res: express.Response,
        next: express.NextFunction
      ) => {
        myLogger.error(err.toString(), `${req.method} ${req.originalUrl}`);
        res.status(500).json({ description: err, success: false });
      }
    );
  }

  // CUSTOM VALIDATES
  private initValidator() {
    validate.validators.objectid = (value: any) => {
      return ObjectId.isValid(value) ? undefined : "Invalid ObjectId";
    };
    validate.validators.jsdate = (value: any) => {
      if (value instanceof Date && !isNaN(value.valueOf())) {
        return null;
      }
      return "Invalid Date";
    };
  }
}

export default new App().app;
