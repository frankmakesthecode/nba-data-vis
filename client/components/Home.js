import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPerGame } from '../store/perGame';

export const Home = (props) => {
  const { perGame, loadPerGame } = props;

  useEffect(() => {
    loadPerGame();
  }, []);

  return (
    <div>
      <h3>Welcome to the Home Page</h3>
    </div>
  );
};

const mapState = (state) => {
  return {
    perGame: state.perGame,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadPerGame: () => dispatch(fetchPerGame()),
  };
};

export default connect(mapState, mapDispatch)(Home);
