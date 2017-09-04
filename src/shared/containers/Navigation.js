import React from 'react';
import { connect } from 'react-redux';
import { filter } from 'shared/actions/todo';
import styled from 'styled-primitives';

const filters = ['All', 'Completed', 'Uncompleted'];

const Wrapper = styled.View`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavigateButton = styled.Touchable`
  width: 30%;
  height: 50;
`;

const Text = styled.Text`
  text-align: center;
  padding: 10px 0;
`;

const Navigation = ({ navigateTo }) =>
  (<Wrapper>
      {filters.map(filterName =>
        <NavigateButton
          onPress={() => { navigateTo(filterName); }}
          key={filterName}
        >
          <Text>{filterName}</Text>
        </NavigateButton>
      )}
  </Wrapper>);

export default connect(null, (dispatch) => ({
  navigateTo: (filterName) => { dispatch(filter(filterName)); },
}))(Navigation);
