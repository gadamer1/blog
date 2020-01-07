import { userStore } from "./user/interfaces";
import { postStore } from "./post/interfaces";

export type store = { user: userStore; post: postStore };
