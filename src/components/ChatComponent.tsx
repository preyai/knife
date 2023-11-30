import React, { useState } from 'react';
import { Paper, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

interface Message {
  id: number;
  author: string;
  content: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message: Message = {
        id: messages.length + 1, // Simple ID generation
        author: 'User', // Placeholder for author name
        content: newMessage,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <Paper elevation={3} style={{ margin: '16px 0', padding: '8px' }}>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.author} secondary={message.content} />
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          label="Напишите сообщение..."
          variant="outlined"
          size="small"
          style={{ marginRight: '8px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Отправить
        </Button>
      </div>
    </Paper>
  );
};

export default ChatComponent;
