import * as Express from "express";
import user from "./user";

const app = Express();

app.get("/", (_req, res) => {
  res.send("hello");
});

app.use("/user", user);

app.listen(7000);
