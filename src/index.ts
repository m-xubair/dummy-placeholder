const domain = 'https://dummyimage.com/';
interface ImgPlaceholderSettings {
  width?: number;
  height?: number;
  bgColor?: string;
  txtColor?: string;
  imgText?: string;
}
export const ImgPlaceholder = ({ width, height, bgColor, txtColor, imgText }: ImgPlaceholderSettings) => {
  let imgUrl = `${domain}`;
  if (!width && !height) {
    imgUrl += '300x300';
  } else if (width || height) {
    if (width) imgUrl += `${width}${width && height ? 'x' : ''}`;
    if (height) imgUrl += height;
  }
  imgUrl += bgColor ? '/' + bgColor : '/cccccc';
  imgUrl += txtColor ? '/' + txtColor : '/000000';
  imgUrl += imgText ? '?text=' + encodeURI(imgText) : '';
  return imgUrl;
};

// const txtPlaceholder = ({ words }) => {
//   let text = [];
//   console.log(allWords);
//   while (--words >= 0) {
//     text.push(allWords[Math.floor(Math.random() * allWords.length)]);
//   }
//   console.log(text);
// };
