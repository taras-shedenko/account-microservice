import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer"))
      throw new Error("Missing access token");
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, process.env.ACCESS_SECRET);
    next();
  } catch (e) {
    res.status(401).send(`Unuathorized: ${e.message}`);
  }
};
