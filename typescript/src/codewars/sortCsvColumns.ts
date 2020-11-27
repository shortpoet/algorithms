export const sortCsvColumns2 =
  (csvFileContent: string): string => {
    const lines = csvFileContent.split('\n');
    const head = lines.slice(0, 1)[0].split(';');
    const order = [...head]
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .map((d, i) => head.indexOf(d));
    const sorted = lines
      .map((l, il) => l
        .split(';')
        .map((d, id, ad) => ad[order[id]])

        .join(';')
      ).join('\n');

    // const orderD: {
    //   [key: string]: number | string,
    // }[] =
    //   [...head].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).map((d, i) => ({
    //     [`${d}`]: head.indexOf(d)
    //   }));
    return sorted;
  }

// https://www.codewars.com/kata/57f7f71a7b992e699400013f/solutions/typescript

export const sortCsvColumns3  =  (csv: string): string => {
  const lines = csv.split('\n').map(line => line.split(';'))
  console.log(lines);
  
  const h = lines[0].map(s => s.toLowerCase())
  const sortOrder = h.map((_, i) => i).sort((a,b) => h[a] < h[b] ? -1 : h[a] > h[b] ? 1 : 0)
  return lines.map(line => sortOrder.map(i => line[i]).join(';')).join('\n')
}
export const sortCsvColumns  =  (csvFileContent: string): string => {
  const rows = csvFileContent.split('\n').map(row => row.split(';'));
  const headers = rows[0].map(x => x.toLowerCase());
  console.log(headers);
  // https://stackoverflow.com/questions/51164161/spread-syntax-vs-slice-method
  console.log(headers.slice());
  
  const transform = headers.slice().sort().map(x => headers.indexOf(x.toLowerCase()));
  return rows.map(row => transform.map(i => row[i])).map(row => row.join(';')).join('\n');}