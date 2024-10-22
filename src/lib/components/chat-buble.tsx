"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, CircleStop, Copy, Mail, Mailbox, Maximize, Minimize, Send, X } from "lucide-react";
import { useLang } from "../stores/lang.store";
import { cn } from "../utils";
import { Message, useChat } from "ai/react";
import { useDetectDevice } from "../hooks/use-detect-device";
import { Separator } from "./ui/separator";
import dayjs from "dayjs";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useViewMode } from "../stores/mode.store";

const defaultQuestions: { french: string, english: string }[] = [
  { french: "Quels projets as-tu réalisés récemment ?", english: "What projects have you recently completed?" },
  { french: "Quelles sont tes compétences principales en développement ?", english: "What are your main development skills?" },
  { french: "Peux-tu me parler de ton parcours professionnel et de tes expériences passées ?", english: "Can you tell me about your professional background and past experiences?" },
  { french: "Quels sont tes objectifs professionnels pour l'avenir ?", english: "What are your professional goals for the future?" },
  { french: "As-tu des passions ou des hobbies en dehors du développement ?", english: "Do you have any passions or hobbies outside of development?" }
]

export const AIChatBubble = () => {
  const { deviceType } = useDetectDevice();
  const { messages, input, handleInputChange, handleSubmit, setInput, setMessages, stop, isLoading } = useChat();
  const [maximized, setMaximized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { viewMode } = useViewMode();
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
      /- \!\[(.*?)\]\((.*?)\)\s*-\s*(.*?)(\n|$)/g,
      `<div class='flex items-center gap-2 -mt-4 -mb-3'><img src='$2' alt='$1' style='width: 60px; height: 60px; border-radius: 0.5rem;' /> <span>$3</span></div>`
    );

    replaced = replaced.replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' target='_blank' class='text-blue-400 hover:underline'>$1</a>");

    replaced = replaced.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    replaced = replaced.replace(/#{1,6} (.*?)(\n|$)/g, "<h1 class='text-xl font-semibold'>$1</h1>");

    return replaced;
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-[400] no-print">
      {isOpen && (
        <div
          className={cn("bg-[#100E0E] text-white rounded-lg overflow-hidden flex flex-col motion-preset-blur-up", {
            "fixed inset-0 rounded-none": deviceType === "Mobile",
            "mb-3 w-full sm:w-[500px] h-full sm:h-[42rem]": deviceType !== "Mobile",
            "sm:h-[calc(100vh-10rem)] sm:w-[calc(100vw-10rem)]": maximized && deviceType !== "Mobile",
          })}
          style={{
            border: '2px solid #282828',
            boxShadow: 'inset 1px -1px 32.7px 0px #242424'
          }}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#282828]">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Gaëtan <span className="bg-[#282828] text-[#F3F3F3] rounded-md px-2 py-1 text-xs">Mini Bot</span>
            </h2>

            <div className="flex space-x-2">
              {deviceType == "Desktop" && (
                <button className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1" onClick={() => {
                  setMaximized(!maximized);
                }}>
                  {maximized ?<Minimize size={20} /> : <Maximize size={20} />}
                </button>
              )}

              <button className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1" onClick={() => {
                if (isLoading) {
                  stop();
                }
                setMessages([]);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-broom">
                  <path d="m13 11 9-9"/>
                  <path d="M14.6 12.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2Z"/>
                  <path d="m6.8 10.4 6.8 6.8"/>
                  <path d="m5 17 1.4-1.4"/>
                </svg>
              </button>

              <button className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1" onClick={() => {
                if (isLoading) {
                  stop();
                }

                setMessages([]);
                setIsOpen(false);
              }}>
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
                  {lang === "fr" ? <>Ceci est un chatbot alimenté par <strong>GPT 4o mini</strong>, il aussi entièrement personnalisé pour répondre à des questions sur moi et mes projets, donc n&apos;hésitez pas à poser des questions!</>
                  : <>This is a chatbot powered by <strong>GPT 4o mini</strong>, it&apos;s also fully customized to answer questions about me and my projects, so feel free to ask questions!</>}
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <>
                  {message.role === "system" && message.content.includes("export") ? (
                    <div className="flex justify-center items-center flex items-center text-center space-x-2 text-gray-400">
                      {/* <div className="flex flex-col items-center gap-1">
                        {lang === "fr"
                          ? <>Lien d&apos;exportation généré et copié dans le presse-papier</>
                          : <>Export link generated and copied to clipboard</>
                        }
                      </div> */}
                    </div>
                  ) : (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={cn("max-w-max p-2.5 rounded-lg bg-[#100E0E]")}
                        style={{
                          boxShadow: "inset 1px -1px 32.7px 0px #242424",
                          border: "1px solid #282828",
                        }}
                      >
                        {message.toolInvocations ? (
                          <div className="flex flex-col items-center gap-2">
                            <p className="text-gray-400 text-sm text-center">
                              {lang === "fr" ? "J'ai besoin d'utiliser les outils suivants" : "I need to use the following tools"}:
                              &nbsp;
                              {message.toolInvocations.map((tool, index) => (
                                <span key={index} className="font-semibold bg-blue-500 cursor-pointer text-[#100E0E] rounded-md px-2 py-1 text-xs">
                                  {tool.toolName}
                                </span>
                              ))}
                            </p>
                          </div>
                        ) : (
                          <div
                            className="whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: renderContent(message.content) }}
                          />
                        )}

                        {message.role === "assistant" && !isLoading && !message.toolInvocations && (
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              className="text-gray-400 hover:text-white hover:bg-[#1a1818] rounded-md p-1"
                              onClick={() => {
                                navigator.clipboard.writeText(message.content);
                                toast.success("Message copied to clipboard");
                              }}
                            >
                              <Copy size={16} />
                            </button>

                            <span className="text-xs text-gray-400">
                              {dayjs(message.createdAt).format("HH:mm")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
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
                className={cn("flex-1 bg-[#100E0E] border border-[#282828] rounded-l-lg p-2 focus:outline-none", {
                  "opacity-50": isLoading
                })}
                disabled={isLoading}
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
                <button
                  onClick={handleSubmit}
                  className={cn("bg-[#100E0E] border border-[#282828] rounded-r-lg p-2 hover:bg-[#1a1818] transition-colors", {
                    "opacity-50": isLoading
                  })}
                  style={{
                    boxShadow: 'inset 1px -1px 32.7px 0px #242424',
                  }}
                  disabled={!input}
                >
                  <Send size={20} className={cn({
                    "text-gray-400": !input,
                    "text-white": input
                  })} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={cn("flex flex-row gap-2", {
        "hidden": deviceType === "Mobile" && isOpen
      })}>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={() => {
                  if (!isOpen) toggleChat();
                  setInput(lang === "fr" ? "Je veut te contacter" : "I want to contact you");
                }}
                className={cn("bg-[#100E0E] text-white rounded-full p-3 shadow-lg hover:bg-[#1a1818] transition-colors border border-[#282828]")}
                style={{
                  boxShadow: 'inset 1px -1px 10px 0px #242424',
                }}
              >
                <Mail size={24} />
              </button>
            </TooltipTrigger>

            <TooltipContent>
              {lang === "fr" ? "Contacter moi via le Chatbot" : "Contact me via the Chatbot"}
            </TooltipContent>
          </Tooltip>

          {viewMode == "normal" && <Tooltip>
            <TooltipTrigger>
              <button
                onClick={toggleChat}
                className={cn("bg-[#100E0E] text-white rounded-full p-3 shadow-lg hover:bg-[#1a1818] transition-colors border border-[#282828]")}
                style={{
                  boxShadow: 'inset 1px -1px 10px 0px #242424',
                }}
              >
                <Bot size={24} />
              </button>
            </TooltipTrigger>

            <TooltipContent>
              {lang == "fr" ? "Ouvrir le Chatbot" : "Open Chatbot"}
            </TooltipContent>
          </Tooltip>}
        </TooltipProvider>
      </div>
    </div>
  )
}