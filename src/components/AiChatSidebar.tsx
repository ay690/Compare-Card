import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import {
  addMessage,
  setIsTyping,
  type ChatMessage,
} from "@/store/slices/chatSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";

const AIChatSidebar = () => {
  const dispatch = useDispatch();
  const { messages, isTyping } = useSelector((state: RootState) => state.chat);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    dispatch(addMessage(userMessage));
    setInput("");

    // Simulating AI response
    dispatch(setIsTyping(true));
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `I understand you're looking for "${input}". Let me help you find the best credit cards that match your needs!`,
        timestamp: new Date(),
      };
      dispatch(addMessage(aiResponse));
      dispatch(setIsTyping(false));
    }, 1500);
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
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer transition-colors hover:scale-105 duration-300"
        >
          <X className="h-4 w-4 hover:scale-105" />
        </Button>
      </div>

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
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-banking-text p-3 rounded-lg">
                <p className="text-sm">Typing...</p>
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
