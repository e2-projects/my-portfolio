import { MultilinePipe } from './multiline.pipe';

describe('MultilinePipe', () => {

  let pipe: MultilinePipe;
  const TEST_CASES = [
    { value: null, expected: '' },
    { value: undefined, expected: '' },
    { value: '', expected: '' },
    { value: ' ', expected: ' ' },
    { value: 'abc', expected: 'abc' },
    { value: '\r\na\nbc', expected: '</br>a</br>bc' },
    { value: 'a b\nc', expected: 'a b</br>c' },
    { value: '1.\n\n\r\n', expected: '1.</br></br></br>' }
  ];

  beforeEach(() => {
    pipe = new MultilinePipe();
  });

  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  TEST_CASES.forEach((testCase: {value: any, expected: string}) => {
    test(`should transform '${testCase.value}' to '${testCase.expected}'`, () => {
      expect(pipe.transform(testCase.value)).toEqual(testCase.expected);
    });
  });

});
