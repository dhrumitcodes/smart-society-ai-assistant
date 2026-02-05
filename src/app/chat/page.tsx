"use client";

import { TamboProvider } from "@tambo-ai/react";
import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { components, tools } from "@/lib/tambo";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";

export default function Home() {
  const mcpServers = useMcpServers();

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <div className="min-h-screen bg-gradient-to-br from gray-100 to-gray-200 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

          <div className="border-b px-6 py-4 bg-indigo-600">
            <h1 className="text-xl font-semibold text-white">
              🏢 Smart Society AI Assistant
            </h1>
            <p className="text-sm text-indigo-100">
              Maintenance • Visitors • Complaints • Notices
            </p>
          </div>

          <div className="flex-1">
            <MessageThreadFull />
          </div>

        </div>
      </div>
    </TamboProvider>
  );
}


 
