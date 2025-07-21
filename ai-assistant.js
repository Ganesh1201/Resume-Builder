// Placeholder for AI Assistant logic
// In the future, integrate with an AI API (e.g., OpenAI, HuggingFace) to provide suggestions

function showAISuggestion(message) {
  document.getElementById('ai-suggestions').innerText = message;
}

// Example usage (replace with real AI integration later):
// showAISuggestion('Try to highlight your leadership skills in your project descriptions!');

// Floating AI Chatbot logic
const chatbotCircle = document.getElementById('ai-chatbot-circle');
const chatbotWindow = document.getElementById('ai-chatbot-window');
const chatbotClose = document.getElementById('ai-chatbot-close');

chatbotCircle.onclick = function() {
  chatbotWindow.style.display = 'block';
  chatbotCircle.style.display = 'none';
};
chatbotClose.onclick = function() {
  chatbotWindow.style.display = 'none';
  chatbotCircle.style.display = 'flex';
};

// ChatGPT API integration (for demo/testing only)
async function askChatGPT(message) {
  showAISuggestion('Thinking...');
  const apiKey = 'YOUR_OPENAI_API_KEY'; // TODO: Replace with your OpenAI API key
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: message}]
      })
    });
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No response';
    showAISuggestion(reply);
  } catch (err) {
    showAISuggestion('Error: Unable to get response.');
  }
}

document.getElementById('ai-send-btn').onclick = function() {
  const userInput = document.getElementById('ai-user-input').value;
  if (userInput.trim()) {
    askChatGPT(userInput);
  }
};
