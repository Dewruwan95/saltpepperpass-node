// type for input password
export type TGenerateHashProps = string;

// type for salting length
export type TGenerateSaltingTextProps = number;

// type for output result of salt and pepper
export type TGenerateHashResult = {
  hash: string;
  saltingText: string;
};

// type for output result of password hash
export type TVerifyHashResult = boolean;
