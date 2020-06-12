import { constants } from './constants/constants';
interface TxtPlaceholderSettings {
  paragraphs?: number;
  paraWords?: number;
  type?: string;
}
export const TxtPlaceholder = ({ paragraphs, paraWords, type = 'plain' }: TxtPlaceholderSettings) => {
  paragraphs = paragraphs ? (paragraphs > constants.maxParagraphs ? constants.maxParagraphs : paragraphs) : 1;
  paraWords = paraWords ? paraWords : constants.paragraphWords;
  const txtToParagraphs = constants.text.split('\n');
  const allParagraphs = txtToParagraphs.filter((p) => p);
  const randomParagraphs = allParagraphs.sort(() => Math.random() - Math.random()).slice(0, paragraphs);
  while (randomParagraphs.length < paragraphs) {
    const moreParagraphs = allParagraphs
      .sort(() => Math.random() - Math.random())
      .slice(0, paragraphs - randomParagraphs.length);
    randomParagraphs.push(...moreParagraphs);
  }
  const dummyText = randomParagraphs.map((p) => {
    return shortenString(p, paraWords);
  });
  const text = type === 'plain' ? dummyText.join('\n') : `<p>${dummyText.join(`</p><p>`)}</p>`;

  return text;
};

const shortenString = (str: string, maxLength = constants.paragraphWords) => {
  while (str.split(' ').length < maxLength) {
    str += str;
  }
  return str.split(' ').slice(0, maxLength).join(' ');
};
