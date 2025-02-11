# Vocal-AI-Assistant | Mistral LLM | Ollama
Vocal AI Assistant is a real-time, voice-enabled AI application that combines advanced speech recognition, natural language processing, and retrieval-augmented generation (RAG) techniques to deliver intelligent and interactive voice-based interactions. The assistant is designed to serve various domains

# Demonstration Video for the project :
[![Watch the video](https://github.com/user-attachments/assets/64ba575b-d7af-45d5-89a4-9401cbbff6f3)](https://www.youtube.com/watch?v=R4_6MRju6yk)

# Features
- Record audio input from users in chunks.
- Transcribe the recorded audio using a pre-trained AI model.
- Interact with the AI model to generate responses based on user input.
- Utilizes a knowledge base for context-aware responses.
# Prerequisites
Before running the code, ensure you have the following dependencies installed:

- Python above 3.8
- pyaudio
- numpy
- faster_whisper (Installable via pip)
- qdrant_client (Installable via pip)
Other dependencies specified in requirements.txt
# Usage
Clone this repository to your local machine.
```
git clone git@github.com:
```
Install the dependencies using pip.
```
pip install -r requirements.txt
```
Run the main script app.py.
```
python app.py
```
Follow the prompts to interact with the voice assistant. Speak into the microphone when prompted.

# Configuration
You can adjust the default model size and chunk length in the script as per your requirements.
Modify the paths and settings related to the knowledge base and AI model if needed.
Notes
Ensure that the script correctly configures and accesses your system's microphone.
Handle exceptions and errors gracefully, especially during audio recording and transcription processes.
# License
This project is licensed under the MIT License - see the LICENSE file for details.
