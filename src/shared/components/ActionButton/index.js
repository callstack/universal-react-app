import React from 'react';
import styled from 'styled-primitives';

const Wrapper = styled.Touchable`
  width: 30px;
  height: 30px;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default ({ onClick, children}) => <Wrapper onPress={onClick}>{children}</Wrapper>
