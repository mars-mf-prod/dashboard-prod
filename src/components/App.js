import React, { useContext, useState } from 'react';
import NavBar from './navbar/NavBar';
import AppPage from './AppPage/AppPage';

import FlowContainer from './flow/FlowContainer';
import AppsContext from '../contexts/AppsContext';
import DependencyChart from './DependencyChart/DependencyChart';
import DropZoneContainer from './DropZone/DropZoneContainer';
import '../styles.scss';

import '../styles/AppPage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const { apps } = useContext(AppsContext);

  const renderAppRoutes = () =>
    apps.map((app, i) => (
      <Route key={`AppRoute${i}`} path={`/app/${app.id}`} exact>
        <AppPage app={app} />
      </Route>
    ));
  if (apps.length)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/* <Route path="/" exact component={DropZoneContainer} /> */}
            <Route path="/" exact component={FlowContainer} />
            <Route path="/home" exact component={FlowContainer} />
            {renderAppRoutes()}
            <Route path="/dependencies" component={DependencyChart} />
          </Switch>
        </div>
      </Router>
    );
  else
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={DropZoneContainer} />
          </Switch>
        </div>
      </Router>
    );
};

export default App;
