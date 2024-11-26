import jwt from 'jsonwebtoken';
import req from "express/lib/request.js";

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      data: 'authenticate failed'
    });
  }

}
export default authenticate;

