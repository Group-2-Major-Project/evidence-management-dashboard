import { NextApiRequest, NextApiResponse } from "next";
import dataList from "../../dataList.json";

const mvdAuth = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const mvdData = dataList.mvd;

  mvdData.map((mvd: { username: string; password: string }) => {
    if (mvd.username == body.username && mvd.password == body.password) {
      res.redirect(302, "/mvd-home");
    } else {
      res.redirect(302, "/mvd-login");
    }
    res.end();
  });
};

export default mvdAuth;
