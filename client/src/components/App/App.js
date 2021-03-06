import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './app.scss';

const Login = lazy(()=> import('@app/components/Login'));
const Chat = lazy(() => import('@app/components/Chat'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/chat/:room/:name">
          <Chat/>
        </Route>
        <Redirect to="/login"/>
      </Switch>
    </Suspense>
  );
};

export default App;
