import React, { useState } from 'react';
import { Container, Paper, Title, Text, Button, Stack, List, ActionIcon, Switch, Group } from '@mantine/core';
import { FaMicrophone, FaStop, FaThumbsUp, FaThumbsDown, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Wave from 'react-wavify';
import dayjs from 'dayjs';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    // Add recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
  };

  const handleFeedback = (messageIndex, isPositive) => {
    setConversation(prev => prev.map((msg, idx) => 
      idx === messageIndex ? { ...msg, feedback: isPositive } : msg
    ));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Container size="sm" py="xl">
        <Paper shadow="md" p="lg" radius="lg" className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
          <Stack spacing="lg">
            <Group position="apart" align="center">
              <Title order={1} className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'}`}>
                Emmy's Kitchen Voice Assistant
              </Title>
              <Switch
                size="lg"
                onLabel={<FaSun size={16} />}
                offLabel={<FaMoon size={16} />}
                checked={isDarkMode}
                onChange={(event) => setIsDarkMode(event.currentTarget.checked)}
              />
            </Group>
            
            <Text align="center" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Welcome to Emmy's Kitchen! I'm your AI assistant. How can I help you today?
            </Text>

            <div className="relative flex justify-center py-8">
              <AnimatePresence>
                {isRecording && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Wave
                      fill={isDarkMode ? '#3B82F6' : '#60A5FA'}
                      paused={!isRecording}
                      options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="xl"
                  radius="xl"
                  className={`shadow-lg ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                  onClick={isRecording ? stopRecording : startRecording}
                  leftIcon={isRecording ? <FaStop size={20} /> : <FaMicrophone size={20} />}
                >
                  {isRecording ? 'Stop Recording' : 'Start Recording'}
                </Button>
              </motion.div>
            </div>

            <Paper 
              withBorder 
              radius="md" 
              p="md" 
              className={`max-h-[400px] overflow-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}
            >
              <List spacing="md" size="sm" center>
                {conversation.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <List.Item 
                      className={`p-4 rounded-lg flex flex-col gap-2 ${
                        msg.type === 'user' 
                          ? isDarkMode ? 'bg-blue-900' : 'bg-blue-50'
                          : isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <Text weight={500} className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                            {msg.type === 'user' ? 'You' : 'Assistant'}
                          </Text>
                          <Text size="xs" className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {dayjs(msg.timestamp).format('HH:mm')}
                          </Text>
                        </div>
                        {msg.type === 'assistant' && (
                          <Group spacing="xs">
                            <ActionIcon
                              size="sm"
                              variant="subtle"
                              color={msg.feedback === true ? 'green' : 'gray'}
                              onClick={() => handleFeedback(index, true)}
                            >
                              <FaThumbsUp size={14} />
                            </ActionIcon>
                            <ActionIcon
                              size="sm"
                              variant="subtle"
                              color={msg.feedback === false ? 'red' : 'gray'}
                              onClick={() => handleFeedback(index, false)}
                            >
                              <FaThumbsDown size={14} />
                            </ActionIcon>
                          </Group>
                        )}
                      </div>
                      <Text className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                        {msg.text}
                      </Text>
                    </List.Item>
                  </motion.div>
                ))}
              </List>
            </Paper>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default App;