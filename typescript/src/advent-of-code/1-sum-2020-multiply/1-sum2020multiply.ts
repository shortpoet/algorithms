const nums = [1408, 1335, 1648, 1458, 1627, 1928, 1967, 1827, 1606, 1569, 1893, 1866, 1768, 1795, 1264, 1684, 1552, 1343, 1917, 1675, 1731, 1800, 1413, 1879, 1664, 1350, 1694, 1372, 1851, 1743, 1735, 833, 748, 1265, 1885, 1874, 2007, 1661, 1895, 1537, 1622, 1355, 762, 1533, 1771, 1966, 1978, 1572, 1833, 1969, 1805, 1820, 1536, 1911, 2009, 1817, 1268, 1998, 1759, 2008, 2002, 1187, 1896, 1850, 1734, 1849, 1589, 1302, 444, 1280, 1590, 1959, 902, 1709, 1932, 1277, 1561, 1301, 1831, 1286, 1693, 1927, 1467, 1384, 1662, 1401, 716, 1634, 1785, 1801, 1380, 1971, 1292, 1828, 185, 1560, 1322, 1787, 1545, 1395, 1445, 1807, 1750, 1867, 1433, 1894, 1821, 1983, 1578, 1669, 1610, 1549, 1556, 1346, 1616, 1999, 1925, 1387, 1659, 1457, 1237, 1808, 69, 1906, 1449, 1723, 1974, 1919, 1914, 1338, 1305, 1347, 1903, 1929, 1712, 1607, 1400, 197, 1575, 1282, 1296, 1737, 1396, 2003, 1453, 1660, 1646, 1991, 1565, 1416, 1995, 1784, 1367, 1420, 1593, 1654, 1306, 1916, 1797, 1594, 1471, 1405, 1698, 1541, 1900, 1963, 1696, 1574, 1853, 511, 1603, 1889, 1940, 1843, 1979, 272, 1726, 1294, 1877, 1441, 1697, 1644, 1956, 1689, 1665, 1631, 1717, 1781, 1450, 1618, 1317, 1799, 1950, 1722, 1960, 1628, 1941, 1977, 1775, 1529];
const part1 = (): number | void => {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(2020 - n)) return ((2020 - n) * n)
    seen.add(n);
  }
}
console.log(part1());

const sum = (arr: number[]) => arr.reduce((acc, val) => +val + acc, 0);
const combine = (set: number[], k: number): Array<number[]> => {
  let combos
  // const combos: Array<number[]> = new Array((set.length * (set.length - 1)) / 2);
  if (set.length < k || k <= 0) return [];
  if (k == set.length) return [set];
  if (k == 1) {
    combos = [];
    for (let i = 0; i < set.length; i++) {
      const element = set[i];
      combos.push([element]);
    }
    return combos;
  }
  combos = [];
  for (let i = 0; i < set.length; i++) {
    const head = set.slice(i, i + 1);
    const tailCombos = combine(set.slice(i + 1), k - 1);
    for (let j = 0; j < tailCombos.length; j++) {
      const element = tailCombos[j];
      combos.push(head.concat(element))
    }
  }
  return combos;
}

const part2 = (): number | void => {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const rest = nums.filter(n => n != element);
    const addendCount = 2;
    const combos = combine(rest, addendCount);
    for (const combo of combos) {
      if (sum([...combo, element]) == 2020) {
        return combo[0] * combo[1] * element;
      }
    }
  }
}

console.log(part2())
