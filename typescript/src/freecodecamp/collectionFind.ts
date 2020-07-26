
const collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
const source = { last: "Capulet" };
const collection2 = [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
const source2 = { "apple": 1, "bat": 2 };

export const whatsInAName
  = (collection: { [key: string]: string | number | null | undefined }[], source: { [key: string]: string | number }): { [key: string]: string | number | null | undefined }[] => {
    const arr: { [key: string]: string | number | null | undefined }[] = [];
    return collection.filter(item =>
      Object.keys(source).every(k => Object.keys(item).includes(k))
      &&
      Object.values(source).every(k => Object.values(item).includes(k))
    );
  };
whatsInAName(collection, source);
