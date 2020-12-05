// https://stackoverflow.com/a/50913569/12658653
export { };

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, "./4-input.txt");

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

const passportData: string[] = fs.readFileSync(
  // "./4-input.txt",
  file,
  "utf-8",
)
  // split on blank lines 
  // .split(/^\s*\n/gm)
  // .split(/^\s*$/gm)
  // the other splits were leaving a character that was causing an bogus entry in {dict "": undefined}
  .split(/\n\n+/);

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

const rules: { [key: string]: Function } = {
  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  byr: (input: string) => !!input.match(/^\d{4}$/g) && 1920 <= +input && +input <= 2002,
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  iyr: (input: string) => !!input.match(/^\d{4}$/g) && 2010 <= +input && +input <= 2020,
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  eyr: (input: string) => !!input.match(/^\d{4}$/g) && 2020 <= +input && +input <= 2030,
  // hgt (Height) - a number followed by either cm or in:
  //  If cm, the number must be at least 150 and at most 193.
  //  If in, the number must be at least 59 and at most 76.
  hgt: (input: string) => input.match(/\d+(in)/g)
    ? (!!input.match(/(\d+)(in)/) && 59 <= +input.match(/(\d+)/)![1] && +input.match(/(\d+)/)![1] <= 76)
    : input.match(/\d+(cm)/g)
      ? (!!input.match(/(\d+)(cm)/) && 150 <= +input.match(/(\d+)/)![1] && +input.match(/(\d+)/)![1] <= 193)
      : false,
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  hcl: (input: string) => !!input.match(/^#([0-9a-f]){6}$/g),
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  ecl: (input: string) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input),
  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  pid: (input: string) => !!input.match(/^\d{9}$/g),
  // cid (Country ID) - ignored, missing or not.
  cid: (input: string) => true,
};
const passportProcessing0 =
  (passports: Array<string>): number => {
    const ruleNames = Object.keys(rules);
    return passports.filter((p, i) => {
      const presentFields = p.match(/(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)/gm);
      let validity = false;
      if ((presentFields!.length < 7)) {
        return validity = false;
      } else {
        return validity = ruleNames.every(rule => {
          // mistake was not returning true immediately if rule is cid 
          // because there would otherwise not be a match for below return code
          if (rule == "cid") return true;
          const r = new RegExp(`(${rule}:)(\\w+|#\\w+)`, "m");
          return p.match(r)
            ? rules[rule](p.match(r)![2])
            : false
        })
      }
    }).length;
  };
const passportProcessing2 =
  (passports: Array<string>): number => {
    const ruleNames = Object.keys(rules);
    return passports.filter((p, i) => {
      return ruleNames.every(rule => {
        const r = new RegExp(`(${rule}:)(\\w+|#\\w+)`, "m");
        const presentFields = p.match(/(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)/gm);
        // below code helped me debug it when i realized there were too many unmatched cid
        if (p.match(r)) {
          if (!rules[rule](p.match(r)![2]) && presentFields!.length == 7 && presentFields?.includes("cid")) {
            console.log(p);
            console.log(r);
          }
        } else {
          console.log('######## NO match ########');
          console.log(rule);
          console.log(r);
        }
        // mistake was not returning true immediately if rule is cid 
        // because there would otherwise not be a match for below return code
        if (rule == "cid") return true;
        return p.match(r)
          ? rules[rule](p.match(r)![2])
          : false
      })

    }).length;
  };
const between = (v: number, min: number, max: number) => min <= v && v <= max;

const rules2: { [key: string]: Function } = {
  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  byr: (input: string) => !!input && between(+input, 1920, 2002),
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  iyr: (input: string) => !!input && between(+input, 2010, 2020),
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  eyr: (input: string) => !!input && between(+input, 2020, 2030),
  // hgt (Height) - a number followed by either cm or in:
  //  If cm, the number must be at least 150 and at most 193.
  //  If in, the number must be at least 59 and at most 76.
  hgt: (input: string) => {
    if (!input) return false;
    const m = input.match(/^(\d+)(in|cm)$/);
    if (!m) return false;
    if (m[2] == "in") return between(+m[1], 59, 76)
    if (m[2] == "cm") return between(+m[1], 150, 193)
    return false;
  },
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  hcl: (input: string) => !!input && /^#[0-9a-f]{6}$/.test(input),
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  ecl: (input: string) => !!input && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input),
  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  pid: (input: string) => !!input && /^\d{9}$/.test(input),
  // cid (Country ID) - ignored, missing or not.
  cid: (input: string) => true,
};

const passportDictionaries = passportData
  .map(p => Object.fromEntries(
    p.split(/[\n|\s]+/).map(s => s.split(':'))
  ));

// putting data into dict helps with logic
// adding between function really helps with logic and not having ternaries rather ifs and default
// the tuples in the referenced solution are interesting  
// can reassign the func name

const passportProcessing3 =
  (passports: Array<Record<string, string>>): number => {
    const ruleNames = Object.keys(rules);
    return passports.filter((p, i) => {
      return ruleNames.every(r => {
        // if (rules2[r](p[r]) && Object.keys(p).length == 8) {
        //   console.log(p);
        //   console.log(r);
        // }
        const valid: Function = rules2[r];
        return valid(p[r])
      })
    }).length;
  };

console.log(passportProcessing2(passportData));
console.log(passportProcessing3(passportDictionaries));

// other solutions 
// reddit.com/r/adventofcode/comments/k6e8sw/2020_day_04_solutions/

// https://www.reddit.com/r/adventofcode/comments/k6e8sw/2020_day_04_solutions/gelu79u?utm_source=share&utm_medium=web2x&context=3

// var list = data().split(/\n\n+/)
//   .map(c => Object.fromEntries(
//     c.split(/[\n|\s]+/).map(s => s.split(':'))
//   ));

// var required = ['byr', 'iyr','eyr','hgt','hcl','ecl','pid']; //cid
// console.log(list.filter(d => required.every(f => !!d[f])).length)

// var between = (v, min, max) => parseInt(v,10) <= max && parseInt(v,10) >= min;
// var height = v => {
//   var m = v.match(/^(\d+)(in|cm)$/);
//   if(!m) return false;
//   if(m[2] === 'in') return between(m[1], 59, 76);
//   if(m[2] === 'cm') return between(m[1], 150, 193);
// }
// var eyeColors = 'amb blu brn gry grn hzl oth'.split(' ');
// var rules = [
//   ['byr', v => !!v && between(v, 1920, 2002)], 
//   ['iyr', v => !!v && between(v, 2010, 2020)],
//   ['eyr', v => !!v && between(v, 2020, 2030)],
//   ['hgt', v => !!v && height(v)],
//   ['hcl', v => !!v && /^#[0-9a-f]{6}$/.test(v)],
//   ['ecl', v => !!v && eyeColors.includes(v)],
//   ['pid', v => !!v && /^\d{9}$/.test(v)], 
//   ['cid', v => true]
// ];
// console.log(list.filter(d => rules.every(([f, valid]) => valid(d[f]))).length);

// function data() { /** return the input string ** / }

// https://www.reddit.com/r/adventofcode/comments/k6e8sw/2020_day_04_solutions/gekf1pd?utm_source=share&utm_medium=web2x&context=3

// cat input4.txt |
// sed 's/^$/|/' |
// awk 'BEGIN{ORS=" "}{print}' |
// sed 's/|/\n/g' | # At this point each passport is in one line
// sed 's/^/ /' | # add space to the first line
// egrep ' byr:(19[2-9][0-9]|200[012])' |
// egrep ' iyr:(201[0-9]|2020)' |
// egrep ' eyr:(202[0-9]|2030)' |
// egrep ' hgt:(1[5678][0-9]|19[0123])cm| hgt:(59|6[0-9]|7[0-6])in' |
// egrep ' hcl:#[0-9a-f]{6}( |$)' |
// egrep ' ecl:(amb|blu|brn|gry|grn|hzl|oth)' |
// egrep ' pid:[0-9]{9}( |$)' |
// wc


// const rules: { [key: string]: Function } = {
//   byr: (input: string) => input.match(/^\d{4}$/g) && 1920 <= +input && +input <= 2002,
//   iyr: (input: string) => input.match(/^\d{4}$/g) && 2010 <= +input && +input <= 2020,
//   eyr: (input: string) => input.match(/^\d{4}$/g) && 2020 <= +input && +input <= 2030,
//   hgt: (input: string) => input.match(/\d+(in)/g)
//     ? (input.match(/(\d+)(in)/) && 59 <= +input.match(/(\d+)/)![1] && +input.match(/(\d+)/)![1] <= 76)
//     : input.match(/\d+(cm)/g)
//       ? (input.match(/(\d+)(cm)/) && 150 <= +input.match(/(\d+)/)![1] && +input.match(/(\d+)/)![1] <= 193)
//       : false,
//   hcl: (input: string) => !!input.match(/^#([0-9a-f]){6}$/g),
//   ecl: (input: string) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(input),
//   pid: (input: string) => !!input.match(/\d{9}/g),
// };

// const passportProcessing2 =
//   (passports: Array<string>): number => {
//     const ruleNames = Object.keys(rules);
//     return passports.filter((p, i) => {
//       const presentFields = p.match(/(byr|iyr|eyr|hgt|hcl|ecl|pid|cid)/gm);
//       let validity = false;
//       if ((presentFields!.length < 7)) {
//         return validity = false;
//       } else {
//         return validity = ruleNames.every(rule => {
//           const r = new RegExp(`(${rule}:)(\\w+|#\\w+)`, "m");
//           return p.match(r)
//             ? rules[rule](p.match(r)![2])
//             : false
//         })
//       }
//     }).length;
//   };

// https://regexr.com/5hl4j
// ((byr|iyr|eyr|hgt|hcl|ecl|pid|cid):([^\n ]+)( |\n|$)){8}|((byr|iyr|eyr|hgt|hcl|ecl|pid):([^\n ]+)( |\n|$)){7}

// https://regexr.com/5hl3r
// (((byr:(19[2-9]\d|200[0-2]))|(iyr:(201\d|2020))|(eyr:(202\d|2030))|(hgt:(((59|6\d|7[0-6])in)|(1([5-8]\d|9[0-3])cm)))|(hcl:#[0-9a-f]{6})|(ecl:(amb|blu|brn|gry|grn|hzl|oth))|(pid:(\d{9}))|(cid:([^ \n]*)))( |\n|$)){8}|(((byr:(19[2-9]\d|200[0-2]))|(iyr:(201\d|2020))|(eyr:(202\d|2030))|(hgt:(((59|6\d|7[0-6])in)|(1([5-8]\d|9[0-3])cm)))|(hcl:#[0-9a-f]{6})|(ecl:(amb|blu|brn|gry|grn|hzl|oth))|(pid:(\d{9})))( |\n|$)){7}

// https://github.com/juliapacula/advent-of-code/blob/master/4/index.js