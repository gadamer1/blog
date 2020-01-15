import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center"
    },
    formControl: {
      marign: theme.spacing(1),
      minWidth: 120,
      maxWidth: 320
    },
    title: {
      width: "100%"
    },
    postButton: {
      minWidth: 200
    },
    markdownTextArea: {
      width: "100%",
      minHeight: 500
    },
    markdownPreview: {
      width: "100%"
    }
  })
);
