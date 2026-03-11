import jwt from 'jsonwebtoken';




export const userCheck = (req, res, next) => {
  const token = req.headers.authorization;

  console.log(req.headers);
  
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, 'secret');
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }


}