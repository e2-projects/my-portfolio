import { TakeEveryPipe } from './take-every.pipe';

describe('TakeEveryPipe', () => {

  let pipe: TakeEveryPipe;
  const TEST_CASES = [
    {
      elements: undefined,
      selector: undefined,
      takeFirst: undefined,
      expected: []
    },
    {
      elements: null,
      selector: undefined,
      takeFirst: undefined,
      expected: []
    },
    {
      elements: [''],
      selector: undefined,
      takeFirst: undefined,
      expected: ['']
    },
    {
      elements: ['', '', ''],
      selector: undefined,
      takeFirst: undefined,
      expected: ['', '', '']
    },
    {
      elements: ['1', '2', '3'],
      selector: undefined,
      takeFirst: undefined,
      expected: ['1', '2', '3']
    },
    {
      elements: ['1', '2', '3', '4', '5'],
      selector: 2,
      takeFirst: undefined,
      expected: ['1', '3', '5']
    },
    {
      elements: ['1', '2', '3', '4', '5'],
      selector: 2,
      takeFirst: false,
      expected: ['2', '4']
    },
    {
      elements: ['1', '2', '3', '4', '5'],
      selector: 3,
      takeFirst: true,
      expected: ['1', '4']
    },
    {
      elements: ['1', '2', '3', '4', '5'],
      selector: 3,
      takeFirst: false,
      expected: ['2', '5']
    }
  ];

  beforeEach(() => {
    pipe = new TakeEveryPipe();
  });

  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  TEST_CASES.forEach(testCase => {
    test(`should transform '${testCase.elements?.toString()}' arrary`, () => {
      expect(pipe.transform(testCase.elements,
                            testCase.selector,
                            testCase.takeFirst))
            .toEqual(testCase.expected);
    });
  });

});
