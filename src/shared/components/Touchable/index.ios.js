import styled from 'styled-components/native';

export default styled.TouchableOpacity.attrs({
  onPress: props => props.onClick,
});
