import React, { useState } from 'react';
import { Container, Paper, Title, Text, Button, Stack, List } from '@mantine/core';
import { FaMicrophone, FaStop } from 'react-icons/fa';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [conversation, setConversation] = useState([]);

  const startRecording = () => {
    setIsRecording(true);
    // Add recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
  };

  return (
    <Container size="sm" py="xl">
      <Paper shadow="sm" p="md" withBorder>
        <Stack spacing="md">
          <Title order={1} align="center" color="blue">
            Emmy's Kitchen Voice Assistant
          </Title>
          
          <Text align="center" color="dimmed" size="sm">
            Welcome to Emmy's Kitchen! I'm your AI assistant. How can I help you today?
          </Text>

          <div className="flex justify-center">
            <Button
              size="lg"
              color={isRecording ? 'red' : 'blue'}
              onClick={isRecording ? stopRecording : startRecording}
              leftIcon={isRecording ? <FaStop /> : <FaMicrophone />}
            >
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
          </div>

          <Paper withBorder p="md" style={{ maxHeight: '400px', overflow: 'auto' }}>
            <List spacing="xs" size="sm" center>
              {conversation.map((msg, index) => (
                <List.Item key={index} className={`p-2 rounded ${msg.type === 'user' ? 'bg-blue-50' : 'bg-gray-50'}`}>
                  <strong>{msg.type === 'user' ? 'You: ' : 'Assistant: '}</strong>
                  {msg.text}
                </List.Item>
              ))}
            </List>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;