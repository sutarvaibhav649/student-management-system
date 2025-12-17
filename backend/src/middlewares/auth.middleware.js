import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      const error = new Error("Not authorized, token missing");
      error.statusCode = 401;
      throw error;
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user
    const user = await authRepository.findById(decoded.userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 401;
      throw error;
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error) {
    error.statusCode = 401;
    next(error);
  }
};

export default protect;
