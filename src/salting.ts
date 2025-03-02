import { TGenerateSaltingTextProps } from "./types";

export default function generateSaltingText(
  saltLength: TGenerateSaltingTextProps
): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let result: string = "";
  const charactersLength: number = characters.length;

  for (let i = 0; i < saltLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
