"use client";

import { ReactElement, useState } from "react";
import { BlackjackCard } from "../../_components/ui/blackjack-card";
import { BlackjackInput } from "../../_components/ui/blackjack-input";
import { BlackjackButton } from "../../_components/ui/blackjack-button";
import { MessagesSquare, Users, X } from "lucide-react";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Component } from "@/lib/components/utils/component";

type BlackjackChatProps = {
  gameId: string;
};

type Message = {
  id: string;
  content: string;
  read: boolean;
  sender: string;
  timestamp: number;
};

export const BlackjackChat: Component<BlackjackChatProps> = ({ gameId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  if (!isOpen) {
    return (
      <div className="fixed left-3 top-1/2 transform -translate-y-1/2">
        <BlackjackButton
          size="small"
          onClick={() => {
            setIsOpen(true);
            // TODO: set "read" to true for all messages
          }}
        >
          <MessagesSquare size={24} />
          <span className="sr-only">Open Chat</span>
        </BlackjackButton>

        {messages.some((message) => !message.read) && (
          <span className="bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs absolute -top-1.5 -right-2">1</span>
        )}
      </div>
    )
  }

  return (
    <BlackjackCard
    className="fixed left-0 top-0 w-full h-full md:left-3 md:top-1/2 md:w-96 md:h-96 md:transform md:-translate-y-1/2 p-3 rounded-lg shadow-md transition-transform duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="bg-black bg-opacity-10 p-2 rounded-lg flex items-center gap-1 text-sm justify-between">
          <p>
            {dayJS().format("DD/MM/YYYY HH:mm")} &bull; Lancé par:{" "}
            <span className="text-green-500">Gaëtan</span>
          </p>
          <span className="bg-black text-xs px-2 py-1 rounded-lg bg-opacity-15 flex items-center gap-1.5">
            1<Users size={12} />
          </span>
        </div>

        <div className="flex-1 overflow-y-auto mt-2 space-y-2 pr-2">
          <div className="flex flex-col gap-1 text-sm">
            {messages.map((message, index) => (
              <p>{message.content}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-auto">
          <BlackjackInput
            placeholder="Enter message"
            className="w-full"
            inputSize={"small"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // onKeyPress={(e: any) => {
            //   if (e.key !== "Enter") return;
            //   if (!message) return;
            //   if (message.length < 3) return;
            //   if (message.length > 100) return;

            //   setMessages([...messages, message]);
            //   setMessage("");
            // }}
          />

          <BlackjackButton size="small" className="text-sm" onClick={() => {
            if (!message) return;
            if (message.length < 3) return;
            if (message.length > 100) return;
            
            setMessages([...messages, {
              id: Math.random().toString(36).substring(7),
              content: message,
              read: false,
              sender: "Gaëtan",
              timestamp: dayJS().unix()
            }]);
            setMessage("");
          }}>
            Send
          </BlackjackButton>
        </div>

        <BlackjackButton
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={16} />
        </BlackjackButton>
      </div>
    </BlackjackCard>
  );
};