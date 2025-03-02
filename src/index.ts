// Default export for the main object
import generateHash from "./hashing";
import verifyHash from "./verify";

const saltAndPepperPass = {
  generateHash,
  verifyHash,
};

// Export the default object
export default saltAndPepperPass;

// Named exports
export { generateHash, verifyHash };

export * from "./types";
