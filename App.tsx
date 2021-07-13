import React, {useEffect, useRef} from 'react';
import {Platform,Text} from 'react-native';
import RemotePushController from 'source/notifications/RemotePushController';



const App: React.FC = () => {
  return (
  <>
    <Text>Swapnil</Text>
    <RemotePushController/>
  </>);
};

export default App;
