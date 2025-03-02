# 🧂🔑 saltpepperpass-node

[![npm version](https://img.shields.io/npm/v/saltpepperpass-node.svg)](https://www.npmjs.com/package/saltpepperpass-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Node.js package that securely hashes passwords using bcrypt with customizable salt length, pepper text, and hashing rounds. It enhances password security by salting and peppering before hashing, making it ideal for backend applications.

## Features

- Custom salt length configuration
- Configurable pepper text
- Adjustable hashing rounds
- Built on top of battle-tested bcrypt
- TypeScript support
- Environment-based configuration
- Simple API with just two main functions

## Installation

```bash
npm install saltpepperpass-node
```

## Setup

1. Create a `.env` file in your project root with the following variables:

```env
SALTING_TEXT_LENGTH=5  # Length of the random salt string

PEPPER_TEXT=your_pepper_key  # Your secret pepper text

HASHING_ROUNDS=10  # Number of hashing rounds
```

2. Import the package:

```typescript
// Named imports (recommended)
import { generateHash, verifyHash } from "saltpepperpass-node";

// Or using default import
import saltAndPepperPass from "saltpepperpass-node";

// Using CommonJS
const saltAndPepperPass = require("saltpepperpass-node");
```

## Usage

### Using Named Imports (Recommended)

```typescript
import { generateHash, verifyHash } from "saltpepperpass-node";

// Generate hash
const { hash, saltingText } = generateHash("myPassword");

// Verify password
const isValid = verifyHash("myPassword", saltingText, hash);
```

### Using Default Import

```typescript
import saltAndPepperPass from "saltpepperpass-node";

// Generate a hash
const password = "mySecurePassword123";
const { hash, saltingText } = saltAndPepperPass.generateHash(password);

// Verify a password using stored hash and salt
const isValid = saltAndPepperPass.verifyHash(password, saltingText, hash);

if (isValid) {
  console.log("Password is correct!");
} else {
  console.log("Password is incorrect!");
}
```

## API Reference

### generateHash(password: string): HashResult

Generates a hash for the given password using salt and pepper.

Parameters:

- `password` (string): The password to hash

Returns:

- Object with:
  - `hash` (string): The generated hash
  - `saltingText` (string): The generated salt

### verifyHash(password: string, salt: string, hash: string): boolean

Verifies a password against a stored hash and salt.

Parameters:

- `password` (string): The password to verify
- `salt` (string): The stored salt
- `hash` (string): The stored hash

Returns:

- `boolean`: True if the password matches, false otherwise

## Types

```typescript
type TGenerateHashResult = {
  hash: string;
  saltingText: string;
};

type TVerifyHashResult = boolean;
```

## Environment Variables

| Variable            | Description                        | Default  |
| ------------------- | ---------------------------------- | -------- |
| SALTING_TEXT_LENGTH | Length of the random salt string   | 5        |
| PEPPER_TEXT         | Secret pepper text used in hashing | Required |
| HASHING_ROUNDS      | Number of bcrypt hashing rounds    | 10       |

## Security Considerations

- Store both the hash and salt securely in your database
- Keep your PEPPER_TEXT secret and never expose it
- Choose an appropriate HASHING_ROUNDS value (higher is more secure but slower)
- Use environment variables for configuration in production

## License

MIT
