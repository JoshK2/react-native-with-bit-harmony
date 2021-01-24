---
labels: ['react native', 'typescript', 'button']
description: 'A button component with customizable options.'
---

import {Button} from './button';

Using the basic component:

```js live
<Button onPress={() => console.log('on press')} />
```

Using the button with value option:

```js live
<Button onPress={() => console.log('on press')} value="More Info" />
```

Using the button with buttonStyle option:

```js live
<Button
  onPress={() => console.log('on press')}
  buttonStyle={{backgroundColor: 'black'}}
/>
```

Using the button with buttonStyle and textStyle options:

```js live
<Button
  onPress={() => console.log('on press')}
  buttonStyle={{backgroundColor: '#fafafa'}}
  textStyle={{color: 'black'}}
/>
```
