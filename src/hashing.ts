import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { TGenerateHashProps, TGenerateHashResult } from "./types";
import generateSaltingText from "./salting";

// configure dotenv
dotenv.config();

// Function to salt and pepper a password
export default function generateHash(
  password: TGenerateHashProps
): TGenerateHashResult {
  // check if the environment variables are defined

  if (!process.env.PEPPER_TEXT) {
    throw new Error(
      "PEPPER_TEXT is not defined! Please set it in the .env file."
    );
  }

  // Load environment variables from .env file
  const saltLength = parseInt(process.env.SALTING_TEXT_LENGTH || "5", 10);
  const pepperText = process.env.PEPPER_TEXT;
  const hashingRounds = parseInt(process.env.HASHING_ROUNDS || "10", 10);

  // Generate a salt based on the configured length
  const salt = generateSaltingText(saltLength);

  // Combine the password with the pepper text
  const saltedAndPepperedPassword = salt + password + pepperText;

  // Hash the salted and peppered password with bcrypt
  const hash = bcrypt.hashSync(saltedAndPepperedPassword, hashingRounds);

  return { hash: hash, saltingText: salt };
}
