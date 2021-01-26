---
labels: ['react native', 'typescript', 'search', 'input', 'text']
description: 'A basic search input component.'
---

import {useState} from 'react';
import {SearchInput} from './search-input';

Basic example:

```js live
() => {
  const [value, setValue] = useState('');
  return <SearchInput onChange={setValue} value={value} />;
};
```
