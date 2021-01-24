---
labels: ['react native', 'typescript', 'divider', 'separation']
description: 'A divider component to set a separation between two elements.'
---

import {View, Text} from 'react-native';
import {Divider} from './divider';

Basic example:

```js live
<View>
  <View>
    <Text>Up</Text>
  </View>
  <Divider />
  <View>
    <Text>Bottom</Text>
  </View>
</View>
```

Using the divider with custom style:

```js live
<View>
  <View>
    <Text>Up</Text>
  </View>
  <Divider style={{backgroundColor: 'black'}} />
  <View>
    <Text>Bottom</Text>
  </View>
</View>
```
