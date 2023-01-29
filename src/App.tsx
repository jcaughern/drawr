import React, { useCallback, useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import Navbar from './components/Navbar';
import DrawrPad from './components/DrawrPad';
import SocketMessager from './components/SocketMessager';

export default function App() {
  const [messageHistory, setMessageHistory] = useState<MessageEvent[]>([]);
  const [name, setName] = useState('');

  const socketUrl = 'wss://localhost:3433'

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null && lastMessage !== undefined) {
      setMessageHistory((prev) => prev.concat([lastMessage]));
    }
  }, [lastMessage, setMessageHistory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    sendMessage(name);
  };

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: '95px' }}>
        <Grid
          container
          width="100%"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item maxWidth="75%" border="2px solid black" borderRadius={5}>
            <DrawrPad />
          </Grid>
          <Grid item>
            <SocketMessager
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              connectionStatus={connectionStatus}
              lastMessage={lastMessage}
              name={name}
              messageHistory={messageHistory}
              readyState={readyState}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
