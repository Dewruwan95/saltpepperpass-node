import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { TVerifyHashResult } from "./types";

// configure dotenv
dotenv.config();

export default function verifyHash(
  password: string,
  salt: string,
  hash: string
): TVerifyHashResult {
  // check if the environment variables are defined
  if (!process.env.PEPPER_TEXT) {
    throw new Error(
      "PEPPER_TEXT is not defined! Please set it in the .env file."
    );
  }

  // Load environment variables from .env file
  const pepperText = process.env.PEPPER_TEXT;

  // Combine the input password with the stored salt and pepper text
  const saltedAndPepperedPassword = salt + password + pepperText;

  // Use bcrypt to compare the hash
  const isVerified = bcrypt.compareSync(saltedAndPepperedPassword, hash);

  return isVerified;
}
