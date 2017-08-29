import React from 'react';
import View from 'shared/components/View';
import Text from 'shared/components/Text';

const Wrapper = View`
  flex-direction: row;
  justify-content: center;
`;
const Head = Text`
  font-size: 20px;
`;

export default ({ text }) => <Wrapper><Head>{text}</Head></Wrapper>;
