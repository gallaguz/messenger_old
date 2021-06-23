import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header, Footer} from './components';
import {Main as MainLayout} from './hoc';
import {About, Auth, Chat, Home} from './pages';

export const App = () => {
  return (
    <MainLayout
      header={<Header />}
      footer={<Footer />}
    >
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/auth" component={Auth} />
        <Route path={['/chat/:id', '/chat']} component={Chat} />
        <Route path="/" component={Home} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </MainLayout>
  );
};
