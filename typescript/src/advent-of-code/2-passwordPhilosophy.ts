type Range = [number, number];
type Policy = string;
type Password = string;

export type PassValidateInputTuple = [Range, Policy, Password];

const validate1 =
  (
    range: Range,
    policy: Policy,
    password: Password
  ): number => {
    const matches = password.match(new RegExp(policy, 'g'))?.length!;
    return (
      range[0] <= matches
      && matches <= range[1]
    )
      ? 1
      : 0;
  };

const validate2 =
  (
    range: Range,
    policy: Policy,
    password: Password
  ): number => {
    const matches = password.match(new RegExp(policy, 'g'))?.length!;
    return (
      (password.charAt(range[0] - 1) == policy
        && password.charAt(range[1] - 1) != policy)
      || (password.charAt(range[0] - 1) != policy
      && password.charAt(range[1] - 1) == policy)
    )
      ? 1
      : 0;
  };

import { input } from './2-input';

const output1 =
  input.reduce(
    (count, test: PassValidateInputTuple) =>
      count += validate1(test[0], test[1], test[2])
    , 0)

console.log(output1);

const output2 =
  input.reduce(
    (count, test: PassValidateInputTuple) =>
      count += validate2(test[0], test[1], test[2])
    , 0)

console.log(output2);
