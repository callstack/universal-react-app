import React from 'react';
import Touchable from 'shared/components/Touchable';

const Wrapper = Touchable`
  width: 30px;
  height: 30px;
  margin: 0;
`;

export default ({ onClick, children}) => <Wrapper onClick={onClick}>{children}</Wrapper>
