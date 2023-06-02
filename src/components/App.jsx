import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';
import useStyles from './styles.js';
import useAlan from './Alan';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (

    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>

        </Switch>

      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
