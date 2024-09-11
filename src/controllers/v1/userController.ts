import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import User, { IUser } from 'models/v1/userModel';
import generateToken from 'utils/v1/generateToken';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ name, email, password });
  await user.save();

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    // token: generateToken(user._id),
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Ensure `_id` is of type `ObjectId`
  const userIdAsObjectId: ObjectId = user._id as ObjectId;

  if (user && (await user.comparePassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(userIdAsObjectId),
      role: "System Admin"
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
//   const user = req.user as IUser;
//   res.json(user);
};
