import { NextApiRequest, NextApiResponse } from "next";
import dataList from "../../dataList.json";

const userAuth = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const userData = dataList.users;

  userData.map((user: { username: string; password: string }) => {
    if (user.username == body.username && user.password == body.password) {
      res.redirect(302, "/user-home");
    } else {
      res.redirect(302, "/user-login");
    }
    res.end();
  });
};

export default userAuth;
