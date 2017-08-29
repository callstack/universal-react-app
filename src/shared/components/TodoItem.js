import React from 'react';
import ActionButtons from 'shared/containers/ActionButtons';
import View from 'shared/components/View';
import Text from 'shared/components/Text';

const Wrapper = View`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const Title = Text`
  font-size: 16px;
`;

export default ({ title, id }) => <Wrapper><Title>{title}</Title><ActionButtons id={id}/></Wrapper>
