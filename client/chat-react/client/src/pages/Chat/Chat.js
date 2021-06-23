import PropTypes from 'prop-types';
import React from 'react';
// mark folder 'react-router' as 'not excluded'
// if linting 'cannot resolve symbol'
import {Switch, Route} from 'react-router-dom';
import {
  ChatList,
  MessageList,
  MessagesNotFound,
} from './components';

export const Chat = (props) => {
  // componentDidMount() {
  //   document.addEventListener('keydown', this.listenExistChat);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.listenExistChat);
  // }
  //
  // listenExistChat = ({code}) => {
  //   if (code === 'Escape') {
  //     const {history} = this.props;
  //     history.push('/chat');
  //   }
  // };

  return (
    <Switch>
      <Route path={['/chat/:id', '/chat']}>

        <ChatList {...props} />

        <Route path="/chat/:id">
          <MessageList {...props} />
        </Route>

        <Route exact={true} path="/chat">
          <MessagesNotFound />
        </Route>

      </Route>

      <Route path="*" component={() => <h1>такого чата нет</h1>}/>
    </Switch>
  );
};

Chat.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
};
