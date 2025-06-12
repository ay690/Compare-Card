import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  cardRecommendations?: string[];
}

interface ChatState {
  messages: ChatMessage[];
  isTyping: boolean;
  isOpen: boolean;
}

const initialState: ChatState = {
  messages: [
    {
      id: '1',
      type: 'assistant',
      content: 'Hi! I\'m your AI credit card advisor. Ask me anything like "Show me cards with lounge access" or "Best cards for first-time users".',
      timestamp: new Date(),
    }
  ],
  isTyping: false,
  isOpen: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [initialState.messages[0]];
    },
  },
});

export const { addMessage, setIsTyping, setIsOpen, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;