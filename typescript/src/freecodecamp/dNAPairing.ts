const basePairMap: Record<string, string> = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C"
}
export const dNAPairing
  = (input: string): string[][] => {
    return input.split("").map(base => [base, basePairMap[base]]);
  };