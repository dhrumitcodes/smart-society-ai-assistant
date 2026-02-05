"use client";

import { TamboProvider } from "@tambo-ai/react";
import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { components, tools } from "@/lib/tambo";

export default function ChatPage() {
  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
    >
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="border-b px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-900">
              🏢 Smart Society Assistant
            </h1>
            <p className="text-sm text-gray-500">
              AI helpdesk for rules, visitors, complaints & maintenance
            </p>
          </div>

          {/* Chat */}
          <div className="flex-1">
            <MessageThreadFull />
          </div>

        </div>
      </div>
    </TamboProvider>
  );
}



