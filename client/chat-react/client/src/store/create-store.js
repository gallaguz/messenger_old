import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {request} from '../api';
import {conversationsReducer} from './conversations';
import {messagesReducer} from './messages';
import {botSendMessage, logger} from './middlewares';

const persistConfig = {
  key: 'root',
  storage,
};

export const history = createBrowserHistory();

export const store = createStore(
    persistReducer(
        persistConfig,
        combineReducers({
          router: connectRouter(history),
          messagesReducer,
          conversationsReducer,
        })),
    compose(
        applyMiddleware(
            thunk.withExtraArgument(request),
            routerMiddleware(history),
            botSendMessage,
            logger,
        ),
        composeWithDevTools(),
    ),
);

export const persistor = persistStore(store);


