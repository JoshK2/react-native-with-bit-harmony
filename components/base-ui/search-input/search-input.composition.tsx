import React, {useState} from 'react';
import {SearchInput} from './search-input';

export const SearchInputExample = () => {
  const [value, setValue] = useState('');
  return <SearchInput onChange={setValue} value={value} />;
};
