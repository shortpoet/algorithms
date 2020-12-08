import { getFileContent } from '../0-utils/index'
const testRuleData = getFileContent('../7-handy-haversacks/7-test.txt');
const ruleData = getFileContent('../7-handy-haversacks/7-input.txt');
export const handyHaversacks2 =
  (rules: string): number => { 
    return rules.length;
  };
export const handyHaversacks =
  (rules: string): number => {
    const containerRegex = /^(\w+)\s(\w+)/g;
    const contentsRegex = /\d\s((\w+\s\w+))/g;
    const containers: { [key: string]: Set<string> } = {};
    const canContainIt: { [key: string]: Set<string> } = {};
    const counted: Set<string> = new Set();
    let count = 0;
    const query = "shiny gold";
    rules
      .split('\n')
      .forEach(rule => {
        const contents = [...rule.matchAll(contentsRegex)].map(c => c[1]);
        const container: string = rule.match(containerRegex)![0];
        if (!containers[container]) containers[container] = new Set();
        contents.forEach(c => {
          if (!canContainIt[c]) canContainIt[c] = new Set();
          canContainIt[c].add(container);
          containers[container].add(c);
        });
      });
    const recurse = (arr: string[]|Set<string>) => {
      arr.forEach((container:string) => {
        if (!counted.has(container)) {
          count += 1;
          counted.add(container);
          if (canContainIt[container]) {
            recurse(canContainIt[container])
          }
        }
      });
    };
    recurse(canContainIt[query]);
    return count;
  };
export const handyHaversacksScratch =
  (rules: string): number => {
    const containerRegex = /^(\w+)\s(\w+)/g;
    const contentsRegex = /\d\s((\w+\s\w+))/g;
    const containers: { [key: string]: Set<string> } = {};
    const canContainIt: { [key: string]: Set<string> } = {};
    const counted: Set<string> = new Set();
    let count = 0;
    const query = "shiny gold";
    rules
      .split('\n')
      .forEach(rule => {
        const contents = [...rule.matchAll(contentsRegex)].map(c => c[1]);
        const container: string = rule.match(containerRegex)![0];
        if (!containers[container]) containers[container] = new Set();
        contents.forEach(c => {
          if (!canContainIt[c]) canContainIt[c] = new Set();
          canContainIt[c].add(container);
          containers[container].add(c);
        });
        // console.log(rule);
        // if (contents.includes(query) && !counted.has(container)) {
        //   // console.log(container);
        //   count += 1;
        //   counted.add(container);
        //   if (canContainIt[container]) {
        //     // console.log(rule);
        //     // console.log(container);
        //     // console.log(canBeContainedBy);
        //     canContainIt[container].forEach(c => {
        //       if (!counted.has(c) && containers[c].has(container)) {
        //         // console.log(container);
        //         count += 1;
        //         counted.add(c);
        //       }
        //     })
        //   }
        // }
      });
    // const recurse = (c: string) => {
    //   if (!counted.has(c) && containers[c].has(container)) {
    //     // console.log(container);
    //     count += 1;
    //     counted.add(c);
    //     recurse(c);
    //   }
    // };

    // if (contents.includes(query) && !counted.has(container)) {
    //   // console.log(container);
    //   count += 1;
    //   counted.add(container);
    //   if (canContainIt[container]) {
    //     // console.log(rule);
    //     // console.log(container);
    //     // console.log(canBeContainedBy);
    //     canContainIt[container].forEach(c => {
    //       recurse(c);
    //     })
    //   }
    // }

    const recurse = (arr: string[]|Set<string>) => {
      arr.forEach((container:string) => {
        if (!counted.has(container)) {
          count += 1;
          counted.add(container);
          if (canContainIt[container]) {
            recurse(canContainIt[container])
          }
        }
      });
    };

    recurse(canContainIt[query]);
    // Object.keys(canContainIt).forEach(container => {
    //   canContainIt[query].forEach(color => {

    //   })
    // });


    // Object.keys(containers).forEach(container => {
    //   if (containers[container].has(query) && !counted.has(container)) {
    //     count += 1;
    //     counted.add(container);
    //     if (canContainIt[container]) {
    //       // console.log(rule);
    //       // console.log(container);
    //       // console.log(canBeContainedBy);
    //       canContainIt[container].forEach(c => {
    //         if (!counted.has(c)) {
    //           count += 1;
    //           counted.add(c);
    //           // console.log(container);
    //         }
    //       })
    //     }
    //   }
    // });

    // console.log(counted)
    // console.log(containers);
    // console.log(canContainIt);

    return count;
  };

  console.log(handyHaversacks(ruleData));
