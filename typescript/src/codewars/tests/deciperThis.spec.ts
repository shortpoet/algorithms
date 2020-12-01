
import { decipherThis } from '../decipherThis'

// const Test = {
//   expect: (...args: any[]) => (expect as any)(...args),
//   assertEquals: (...args: any[]) => (expect as any).toBe(...args),
// };

describe("example", function () {
  it("test", function() {
    expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
      .toBe('Have a go at this and see how you do');
  });
});