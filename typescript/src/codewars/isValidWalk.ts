export const isValidWalk
  = (walk: string[]): boolean => {
    const norths = walk.filter(direction => direction == 'n').length;
    const souths = walk.filter(direction => direction == 's').length;
    const wests = walk.filter(direction => direction == 'w').length;
    const easts = walk.filter(direction => direction == 'e').length;
    return (norths == souths) && (wests == easts) && (walk.length == 10)
  };
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));