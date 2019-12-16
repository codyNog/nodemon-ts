import { Router } from "express";

const user = Router();

const now = () => {
  const date = Date.now();
  return date;
};

user.get("/", (_req, res) => {
  res.send(String(now()));
});

user.post("/", (req, res) => {
  res.send(req);
});

export default user;
