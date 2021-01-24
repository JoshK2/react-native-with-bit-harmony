---
labels: ['react native', 'typescript', 'input', 'text']
description: 'A basic input component.'
---

import {useState} from 'react';
import {Input} from './input';

Basic example:

```js live
() => {
  const [value, setValue] = useState('');
  return <Input onChange={setValue} value={value} />;
};
```

Using the input component with place holder:

```js live
() => {
  const [value, setValue] = useState('');
  return <Input placeHolder="Search" onChange={setValue} value={value} />;
};
```

Using the input component with style:

```js live
() => {
  const [value, setValue] = useState('');
  return <Input style={{color: 'blue'}} onChange={setValue} value={value} />;
};
```
