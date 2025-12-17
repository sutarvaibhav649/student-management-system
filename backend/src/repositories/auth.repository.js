import User from "../models/user.model.js";

class AuthRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findByEmail(email) {
    return await User.findOne({ email }).select("+password");
  }

  async findById(userId) {
    return await User.findById(userId);
  }
}

export default new AuthRepository();
