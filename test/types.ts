describe('typed suite', () => {
 test('typed mock', () => {
  const mock = jest.fn<number, [string]>((value) => value.length);
  const result: number = mock('value');
  expect(result).toBe(5);
  // @ts-expect-error mock argument must remain string
  mock(42);
  const object = {method(value: number) { return String(value); }};
  const spy = jest.spyOn(object, 'method');
  spy.mockReturnValue('yes');
  // @ts-expect-error spied return must remain string
  spy.mockReturnValue(3);
 });
 it.each<number>([1,2,3])('issue34617 %d', (number, done) => { const value: number = number; done(); });
 test.each([[1,2,3]])('tuple %d', (a,b,total) => expect(a+b).toBe(total));
 test.todo('future');
});
