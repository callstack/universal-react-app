import styled from 'styled-components';

const Text = styled.p;
const View = styled.div;
const Touchable = styled.button.attrs(({
  onClick: (props) => props.onPress,
}));

export default {
  View,
  Text,
  Touchable
};
