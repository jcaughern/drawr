import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { ReadyState } from 'react-use-websocket';

interface SocketMessagerProps {
  handleChange: React.ChangeEventHandler;
  handleSubmit: React.EventHandler<React.SyntheticEvent>;
  connectionStatus: string;
  lastMessage: MessageEvent | null;
  name: string;
  messageHistory: MessageEvent[];
  readyState: ReadyState
}

export default function SocketMessager({
  handleChange,
  handleSubmit,
  connectionStatus,
  lastMessage,
  name,
  messageHistory,
  readyState
}: SocketMessagerProps) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="userInput"
          label="Name"
          value={name}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} disabled={readyState !== ReadyState.OPEN}>
          Click
        </Button>
      </form>
      <Grid item>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
      </Grid>
    </>
  );
}
