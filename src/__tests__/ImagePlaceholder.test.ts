import { ImgPlaceholder } from '../index';
test('Default Image', () => {
  expect(ImgPlaceholder({})).toBe('https://dummyimage.com/300x300/cccccc/000000');
});

test('Only Width', () => {
  expect(ImgPlaceholder({ width: 500 })).toBe('https://dummyimage.com/500/cccccc/000000');
});

test('Only Height', () => {
  expect(ImgPlaceholder({ height: 500 })).toBe('https://dummyimage.com/500/cccccc/000000');
});

test('Width & Height', () => {
  expect(ImgPlaceholder({ height: 500, width: 400 })).toBe('https://dummyimage.com/400x500/cccccc/000000');
});

test('Background Color', () => {
  expect(ImgPlaceholder({ height: 500, width: 400, bgColor: 'ff0000' })).toBe(
    'https://dummyimage.com/400x500/ff0000/000000',
  );
});

test('Text Color', () => {
  expect(ImgPlaceholder({ height: 500, width: 400, bgColor: 'ff0000', txtColor: 'ffffff' })).toBe(
    'https://dummyimage.com/400x500/ff0000/ffffff',
  );
});

test('Image Text', () => {
  const dummyImage = encodeURI('Dummy Image');
  expect(
    ImgPlaceholder({ height: 500, width: 400, bgColor: 'ff0000', txtColor: 'ffffff', imgText: 'Dummy Image' }),
  ).toBe(`https://dummyimage.com/400x500/ff0000/ffffff?text=${dummyImage}`);
});
