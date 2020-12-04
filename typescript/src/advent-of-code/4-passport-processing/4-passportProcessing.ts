// https://stackoverflow.com/a/50913569/12658653
export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./4-test.txt");

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

const passportData: string[ ] = fs.readFileSync(
  // "./4-input.txt",
  file,
  "utf-8",
)
  // split on blank lines 
  .split(/^\s*\n/gm)
  // .split(/^\s*$/gm);

const passportProcessing1 =
  (passports: Array<string>): number => { 
    return passports.filter(p => {
      const presentFields = p.match(/(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)/gm);
      const condition = presentFields!.length == 8
        ? true
        : presentFields!.length == 7 && !presentFields!.includes('cid')
          ? true
        : false; 
      // if (condition) console.log(presentFields);
      
      return condition
    }).length;
  };

console.log(passportProcessing1(passportData));

const rules = {
  byr: (input: string) => input.length == 0,
  iyr: (input: string) => input.length == 0,
  eyr: (input: string) => input.length == 0,
  hgt: (input: string) => input.length == 0,
  hcl: (input: string) => input.length == 0,
  ecl: (input: string) => input.length == 0,
  pid: (input: string) => input.length == 0,
  cid: (input: string) => input.length == 0,
};

const passportProcessing2 =
  (passports: Array<string>): number => { 
    return passports.filter(p => {
      const presentFields = p.match(/(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)/gm);
      const condition = presentFields!.length == 8
        ? true
        : presentFields!.length == 7 && !presentFields!.includes('cid')
          ? true
        : false; 
      // if (condition) console.log(presentFields);
      
      return condition
    }).length;
  };

  console.log(passportProcessing2(passportData));
