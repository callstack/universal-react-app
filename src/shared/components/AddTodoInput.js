import React from 'react';

import styled from 'styled-components';

const TextInput = styled.input`
  flex-grow: 1;
`

export default ({ onChangeText, value }) =>
  <TextInput
    onChange={(e) => { onChangeText(e.target.value) }}
    value={value}
    placeholder='Add Todo...'
  />
