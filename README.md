# dummy-placeholder

### Quick start

```bash
npm i dummy-placeholdeer --save
```

### Usage

```bash
import { ImgPlaceholder } from "dummy-placeholder";

ImgPlaceholder({}); // Will return a placeholder image url of 300x300
```

### Configuration

##### All parameters are optional

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
