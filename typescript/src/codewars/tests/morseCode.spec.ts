import { decode } from '../morseCode'

describe("morseCode.decode", function() {
  test('HEY JUDE', () => {
    expect(decode('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });
});