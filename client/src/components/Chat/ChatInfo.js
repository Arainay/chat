import React from 'react';
import { useHistory } from 'react-router-dom';
import Svg from '@app/components/Svg';
import logoutIcon from './assets/logout.svg';
import './chat-info.scss';

const ChatInfo = ({ room }) => {
  const history = useHistory();

  const leave = () => {
    history.push('/login');
  };

  return (
    <div className="chat-info">
      <div className="chat-info__online"/>
      <h3 className="chat-info__room">{room}</h3>
      <Svg className="chat-info__logout" content={logoutIcon} onClick={leave}/>
    </div>
  );
};

export default ChatInfo;
