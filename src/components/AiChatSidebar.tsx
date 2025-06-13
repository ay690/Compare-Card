import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import {
  addMessage,
  setIsTyping,
  type ChatMessage,
} from "@/store/slices/chatSlice";
import { aiService } from "@/utils/aiService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X, Settings } from "lucide-react";

const AIChatSidebar = () => {
  const dispatch = useDispatch();
  const { messages, isTyping } = useSelector((state: RootState) => state.chat);
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showApiSettings, setShowApiSettings] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    dispatch(addMessage(userMessage));
    const userQuery = input;
    setInput("");

    // Set typing indicator
    dispatch(setIsTyping(true));

    try {
      // Set API key if provided
      if (apiKey) {
        aiService.setApiKey(apiKey);
      }

      // Generate AI response
      const aiResponse = await aiService.generateChatResponse(userQuery, cards);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: aiResponse.content,
        timestamp: new Date(),
        cardRecommendations: aiResponse.cardRecommendations,
      };

      dispatch(addMessage(assistantMessage));
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content:
          "Sorry, I encountered an error. Please try again or check your API key if you provided one.",
        timestamp: new Date(),
      };
      dispatch(addMessage(errorMessage));
    } finally {
      dispatch(setIsTyping(false));
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="hover:scale-105 text-white rounded-full w-14 h-14 shadow-lg cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed right-0 bottom-0 h-3/4 w-80 bg-white border-l border-gray-200 shadow-lg z-40 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-semibold text-banking-text">AI Assistant</h3>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowApiSettings(!showApiSettings)}
          >
            <Settings className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4 cursor-pointer" />
          </Button>
        </div>
      </div>

      {showApiSettings && (
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <label className="block text-sm font-medium mb-2">
            Groq API Key (Optional)
          </label>
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Groq API key for enhanced AI responses"
            className="text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Without API key, basic responses will be provided
          </p>
        </div>
      )}

      <ScrollArea className="flex-1 p-4 min-h-0">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-400 text-white"
                    : "bg-gray-100 text-banking-text"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                {message.cardRecommendations &&
                  message.cardRecommendations.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.cardRecommendations.map((cardName, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {cardName}
                        </Badge>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-banking-text p-3 rounded-lg">
                <p className="text-sm">AI is thinking...</p>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about credit cards..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 min-w-0 whitespace-nowrap overflow-x-auto"
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            disabled={isTyping}
            style={{
              background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
            }}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatSidebar;
