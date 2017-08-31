import React from 'react';

import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  flex-grow: 1;
`

export default ({ onChangeText, value }) =>
  (<TextInput
    onChangeText={onChangeText}
    value={value}
    placeholder='Add Todo...'
  />);
