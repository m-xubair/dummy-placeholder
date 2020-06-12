# dummy-placeholder

## Dummy placeholders for images & text.

### Quick start

```bash
npm i dummy-placeholdeer --save
```

### Usage

```bash
import { ImgPlaceholder, TxtPlaceholder } from "dummy-placeholder";

ImgPlaceholder({}); // Will return a placeholder image url of 300x300
TxtPlaceholder({}); // Will return a string of 200 words by default
```

### Configuration

##### All parameters are optional (Dummy Image)

####

```bash
const configObj = {
    width: 600,
    height: 200,
    bgColor: "ff0000", // Note: Color code without # sign
    txtColor: "ffffff",  // Note: Color code without # sign
    imgText: "My Awesome place holder"
}
ImgPlaceholder(configObj); // Will return a placeholder image url of 600x200 with red background and White text
```

##### All parameters are optional (Dummy Text)

####

If you are using any frontend framework like (React, Vuejs, Angular) you have to render string as HTML if type is 'html'.

##### React

####

```bash
<div dangerouslySetInnerHTML={{__html: TxtPlaceholder({ paragraphs: 2, paraWords: 250, type: 'html' })}} />
```

##### Vuejs

####

```bash
<div v-html="TxtPlaceholder({ paragraphs: 2, paraWords: 250, type: 'html' })"></div>
```

##### Angular

####

```bash
<div [innerHTML]="TxtPlaceholder({ paragraphs: 2, paraWords: 250, type: 'html' })"></div>
```

### Configuration (Dummy Text)

####

```bash
const configObj = {
    paragraphs: 3,
    paraWords: 250,
    type: 'html' // html | plain (By default plain text)
}
TxtPlaceholder(configObj); // will return 3 paragraphs enclosed within <p> tag. Each paragraph with 250 words.
```
