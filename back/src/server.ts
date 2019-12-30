import app from "./app";

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
