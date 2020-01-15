import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormLabel,
  FormHelperText,
  TextareaAutosize,
  Grid,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { store } from "../../../reducers/types";
import CircularProgressComponent from "../../../utils/Components/CircularProgressComponent";
import { useStyles } from "./MakePostsForm.style";
import {
  MAKE_POST_REQUEST,
  MAKE_POST_FAILURE
} from "../../../reducers/post/actions";
import CustomMarkdown from "../../CustomMarkdown";

const isBoolean = "true";

const MakePostsForm: NextPage = () => {
  const classes = useStyles({});
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const { isPosting, isPostingSuccess } = useSelector(
    (state: store) => state.post.loadingStates
  );
  const { _id, nickname } = useSelector((state: store) => state.user.me);

  // redirect when posting post succesfully
  useEffect(() => {
    if (isPostingSuccess) {
      dispatch({
        type: MAKE_POST_FAILURE
      });
      window.localStorage.removeItem("category");
      window.localStorage.removeItem("title");
      window.localStorage.removeItem("content");

      Router.replace(`/post/${category}/${title}`);
    }
  }, [isPostingSuccess]);

  // window storage

  useEffect(() => {
    const text = window.localStorage.getItem("text");
    const title = window.localStorage.getItem("title");
    const category = window.localStorage.getItem("category");
    const hidden = window.localStorage.getItem("hidden");

    if (text) {
      setText(text);
    } else {
      setText("");
    }
    if (title) {
      setTitle(title);
    } else {
      setTitle("");
    }
    if (category) {
      setCategory(category);
    } else {
      setCategory("dev");
    }
    if (hidden) {
      setHidden(isBoolean === hidden);
    } else {
      setHidden(false);
    }
  }, []);

  const saveText = text => {
    window.localStorage.setItem("text", text);
  };

  const saveTitle = title => {
    window.localStorage.setItem("title", title);
  };
  const saveCategory = category => {
    window.localStorage.setItem("category", category);
  };

  const saveHidden = hidden => {
    window.localStorage.setItem("hidden", hidden);
  };

  const _onChangeText = e => {
    setText(e.target.value);
    saveText(e.target.value);
  };

  const _onCategoryChange = (e: React.ChangeEvent<{ value: string }>) => {
    setCategory(e.target.value);
    saveCategory(e.target.value);
  };

  const _onChangeTitle = (e: React.ChangeEvent<{ value: string }>) => {
    setTitle(e.target.value);
    saveTitle(e.target.value);
  };

  const _onChangeHidden = e => {
    setHidden(e.target.checked);
    saveHidden(e.target.checked);
  };

  const _onSubmitPost = e => {
    e.preventDefault();
    if (text.trim() !== "" && title.trim() !== "") {
      dispatch({
        type: MAKE_POST_REQUEST,
        payload: {
          authorId: _id,
          category,
          // @ts-ignore
          body: text,
          title,
          hidden,
          nickname
        }
      });
    }
  };

  return (
    <form className={classes.root} onSubmit={_onSubmitPost}>
      <Typography component="h1" variant="h5">
        게시글 작성하기
      </Typography>
      <FormControl margin="normal" className={classes.formControl}>
        <TextField
          id="outlined-basic"
          label="제목"
          variant="outlined"
          value={title}
          onChange={_onChangeTitle}
          className={classes.title}
          fullWidth
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={category} onChange={_onCategoryChange}>
          <MenuItem value="dev">개발</MenuItem>
          <MenuItem value="hacking">해킹</MenuItem>
          <MenuItem value="finance">재테크</MenuItem>
          <MenuItem value="business">비즈니스</MenuItem>
        </Select>
        <FormHelperText>카테고리</FormHelperText>
      </FormControl>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ width: "100%" }}>
          <textarea
            value={text}
            onChange={_onChangeText}
            className={classes.markdownTextArea}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomMarkdown source={text} />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isPosting}
        className={classes.postButton}
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
    </form>
  );
};

export default MakePostsForm;
