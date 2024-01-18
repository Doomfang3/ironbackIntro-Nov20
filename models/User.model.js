const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true },
    username: { type: String, unique: true, required: true, trim: true },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
