"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, CircleStop, Send, X } from "lucide-react";
import { useLang } from "../stores/lang.store";
import { cn } from "../utils";
import { useChat } from "ai/react";
import { useDetectDevice } from "../hooks/use-detect-device";
import { Separator } from "./ui/separator";

const defaultQuestions: { french: string, english: string }[] = [
  { french: "Quel est ta stack favoris?", english: "What is your favorite stack?" },
  { french: "Depuis quand tu développes?", english: "Since when do you develop?" },
  { french: "Quels sont tes projets en cours?", english: "What are your current projects?" },
  { french: "Présente toi en quelques mots", english: "Introduce yourself in a few words" }
]

export const AIChatBubble = () => {
  const { deviceType } = useDetectDevice();
  const { messages, input, handleInputChange, handleSubmit, setInput, setMessages, stop, isLoading } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();

  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setMessages([]);
  }

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const renderContent = (text: string) => {
    let replaced = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">ici</a>'
    );

    replaced = replaced.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    replaced = replaced.replace(/#{1,6} (.*?)(\n|$)/g, "<h1 class='text-xl font-semibold'>$1</h1>");

    return replaced;
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div
          className={cn("bg-[#100E0E] text-white rounded-lg overflow-hidden flex flex-col motion-preset-blur-up", {
            "fixed inset-0 rounded-none": deviceType === "Mobile",
            "mb-3 w-full sm:w-[400px] h-full sm:h-[42rem]": deviceType !== "Mobile"
          })}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#282828]">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Gaëtan <span className="bg-[#282828] text-[#F3F3F3] rounded-md px-2 py-1 text-xs">Mini Bot</span>
            </h2>

            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1" onClick={() => setMessages([])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-broom">
                  <path d="m13 11 9-9"/>
                  <path d="M14.6 12.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2Z"/>
                  <path d="m6.8 10.4 6.8 6.8"/>
                  <path d="m5 17 1.4-1.4"/>
                </svg>
              </button>

              <button className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1" onClick={toggleChat}>
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4 chat-messages">
            {messages.length === 0 ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  {defaultQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(lang === "fr" ? question.french : question.english);
                        handleSubmit();
                      }}
                      className="w-full bg-[#100E0E] border border-[#282828] rounded-lg p-3 text-left hover:bg-[#1a1818] transition-colors"
                      style={{
                        boxShadow: 'inset 1px -1px 32.7px 0px #242424',
                      }}
                    >
                      {lang === "fr" ? question.french : question.english}
                    </button>
                  ))}
                </div>

                <Separator className="border-[#282828] w-[30%] mx-auto" />

                <p className="text-sm text-gray-400 text-center">
                  {lang === "fr" ? <>Ceci est un chatbot alimenté par <strong>OpenAI GPT 4o mini</strong>, il aussi entièrement personnalisé pour répondre à des questions sur moi et mes projets, donc n&apos;hésitez pas à poser des questions!</>
                  : <>This is a chatbot powered by <strong>OpenAI GPT 4o mini</strong>, it&apos;s also fully customized to answer questions about me and my projects, so feel free to ask questions!</>}
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={cn("max-w-[100%] p-3 rounded-lg bg-[#100E0E]")}
                    style={{
                      boxShadow: "inset 1px -1px 32.7px 0px #242424",
                      border: "1px solid #282828",
                    }}
                  >
                    <div
                      className="whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: renderContent(message.content) }}
                    />
                  </div>
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-[#282828]">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Type a message..."
                className="flex-1 bg-[#100E0E] border border-[#282828] rounded-l-lg p-2 focus:outline-none"
                style={{
                  boxShadow: 'inset 1px -1px 32.7px 0px #242424',
                }}
              />

              {isLoading ? (
                <button className="bg-[#100E0E] border border-[#282828] rounded-r-lg p-2" style={{
                  boxShadow: 'inset 1px -1px 32.7px 0px #242424',
                }} onClick={stop}>
                  <CircleStop size={20} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="bg-[#100E0E] border border-[#282828] rounded-r-lg p-2 hover:bg-[#1a1818] transition-colors" style={{
                  boxShadow: 'inset 1px -1px 32.7px 0px #242424',
                }}>
                  <Send size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={cn("bg-[#100E0E] text-white rounded-full p-3 shadow-lg hover:bg-[#1a1818] transition-colors", {
          "hidden": deviceType === "Mobile" && isOpen
        })}
        style={{
          boxShadow: 'inset 1px -1px 32.7px 0px #242424',
          border: '1px solid #282828',
        }}
      >
        <Bot size={24} />
      </button>
    </div>
  )
}