export function isInvalidCommand(input: string): boolean {
    return /[^a-zA-Z]/.test(input)
  }
