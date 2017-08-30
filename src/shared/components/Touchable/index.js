import styled from 'styled-components';

export default styled.button.attrs(({
  onClick: (props) => props.onPress,
}));
