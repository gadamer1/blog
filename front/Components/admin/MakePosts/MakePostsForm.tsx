import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import Router from "next/router";
import { Editor } from "react-draft-wysiwyg";
//load editor css
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  Button,
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { store } from "../../../reducers/types";
import CircularProgressComponent from "../../../utils/Components/CircularProgressComponent";
import {
  MAKE_POST_REQUEST,
  MAKE_POST_FAILURE
} from "../../../reducers/post/actions";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID b1e6509aad56ae0");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const MakePostsForm = () => {
  const [editorState, setEditorState] = useState("");
  const [category, setCategory] = useState("dev");
  const [title, setTitle] = useState("");
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const { isPosting, isPostingSuccess } = useSelector(
    (state: store) => state.post.loadingStates
  );
  const { _id, nickname } = useSelector((state: store) => state.user.user);
  // 포스팅 완료됐으면 튕구기
  useEffect(() => {
    if (isPostingSuccess) {
      dispatch({
        type: MAKE_POST_FAILURE
      });
      window.localStorage.removeItem("category");
      window.localStorage.removeItem("title");
      window.localStorage.removeItem("content");

      Router.push("/postList");
    }
  }, [isPostingSuccess]);
  useEffect(() => {
    const content = window.localStorage.getItem("content");
    const title = window.localStorage.getItem("title");
    const category = window.localStorage.getItem("category");
    const hidden = window.localStorage.getItem("hidden");

    if (content) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      );
    } else {
      setEditorState(EditorState.createEmpty());
    }
    if (title) {
      setTitle(title);
    } else {
      setTitle("");
    }
    if (category) {
      setCategory(category);
    } else {
      setCategory("");
    }
  }, []);

  const saveContent = content => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  const saveTitle = title => {
    window.localStorage.setItem("title", title);
  };
  const saveCategory = category => {
    window.localStorage.setItem("category", category);
  };

  const onChangeEditorState: Function = editorState => {
    const contentState = editorState.getCurrentContent();
    saveContent(contentState);
    setEditorState(editorState);
  };

  const _onClickPostButton = e => {
    if (title.trim() !== "") {
      dispatch({
        type: MAKE_POST_REQUEST,
        payload: {
          authorId: _id,
          category,
          // @ts-ignore
          body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
          title,
          hidden,
          nickname
        }
      });
    }
  };
  const _onCategoryChange = (e: React.ChangeEvent<{ value: string }>) => {
    saveCategory(e.target.value);
    setCategory(e.target.value);
  };

  const _onChangeTitle = e => {
    saveTitle(e.target.value);
    setTitle(e.target.value);
  };

  const _onChangeHidden = e => {
    setHidden(e.target.checked);
  };

  return (
    <>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="제목"
          variant="outlined"
          value={title}
          onChange={_onChangeTitle}
        />
        <FormLabel component="legend">카테고리</FormLabel>
        <Select value={category} onChange={_onCategoryChange}>
          <MenuItem value="dev">개발</MenuItem>
          <MenuItem value="hacking">해킹</MenuItem>
          <MenuItem value="finance">재테크</MenuItem>
          <MenuItem value="business">비즈니스</MenuItem>
        </Select>

        <Editor
          //@ts-ignore
          editorState={editorState}
          editorClassName="demo-editor"
          onEditorStateChange={onChangeEditorState}
          localization={{ locale: "ko" }}
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true }
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={_onClickPostButton}
          disabled={isPosting}
        >
          {isPosting ? (
            <CircularProgressComponent />
          ) : (
            <Typography>포스팅</Typography>
          )}
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={hidden}
              onChange={_onChangeHidden}
              value={hidden}
              color="primary"
            />
          }
          label="임시저장"
        />
      </FormControl>
    </>
  );
};

export default MakePostsForm;
