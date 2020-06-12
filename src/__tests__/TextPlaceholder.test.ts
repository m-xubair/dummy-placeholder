import { constants } from '../constants/constants';
import { TxtPlaceholder } from '../index';
test('Default Text', () => {
  expect(TxtPlaceholder({}).split(' ').length).toBeLessThanOrEqual(constants.paragraphWords);
});

test('Paragraphs', () => {
  const paragraphs = 2;
  expect(TxtPlaceholder({ paragraphs }).split(' ').length).toBeLessThanOrEqual(constants.paragraphWords * paragraphs);
});

test('Paragraphs & words', () => {
  const paraWords = 400;
  const paragraphs = 3;
  expect(TxtPlaceholder({ paragraphs, paraWords }).split(' ').length).toBeLessThanOrEqual(paraWords * paragraphs);
});

test('Paragraphs & words HTML', () => {
  const paraWords = 800;
  const paragraphs = 3;
  expect(TxtPlaceholder({ paragraphs, paraWords, type: 'HTML' })).toEqual(expect.stringContaining('<p>'));
});
