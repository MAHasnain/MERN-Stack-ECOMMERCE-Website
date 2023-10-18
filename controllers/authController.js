import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelpers.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    ///  validations

    if (!name) {
      return res.send({
        success: false,
        message: "Name is required",
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "Email is required",
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "password is required",
      });
    }
    if (!phone) {
      return res.send({
        success: false,
        message: "phone number is required",
      });
    }
    if (!address) {
      return res.send({
        success: false,
        message: "address is required",
      });
    }

    /// check user
    const existingUser = await userModel.findOne({ email });

    /// existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already register please login",
      });
    }

    /// Register User

    const hashedPassword = await hashPassword(password);
    ///save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(200).send({
      success: true,
      message: "You're Registered successfully",
    });


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
    });
  }
};


/// POST