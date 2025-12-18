import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sampleMessages = [
    { type: 'ai', text: 'Hello! I\'m your AyurSutra Guide. How can I help you today?' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-96 flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-[#0E4D45] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['Playfair_Display']">AyurSutra Guide</div>
                <div className="text-xs text-white/70 font-['Inter']">AI Health Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {sampleMessages.map((msg, idx) => (
              <div key={idx} className="mb-4">
                <div className={`inline-block p-3 rounded-lg font-['Inter'] ${
                  msg.type === 'ai'
                    ? 'bg-[#E0F2F1] text-[#0E4D45]'
                    : 'bg-[#0E4D45] text-white ml-auto'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Suggested Actions */}
            <div className="mt-4 space-y-2">
              <div className="text-xs text-gray-500 font-['Inter']">Suggested:</div>
              <button className="block w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0E4D45] transition-colors font-['Inter']">
                Book a therapy session
              </button>
              <button className="block w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0E4D45] transition-colors font-['Inter']">
                Check my dosha analysis
              </button>
              <button className="block w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0E4D45] transition-colors font-['Inter']">
                View upcoming appointments
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4D45] font-['Inter']"
              />
              <button className="bg-[#0E4D45] text-white p-2 rounded-lg hover:bg-[#083832] transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0E4D45] text-white p-4 rounded-full shadow-2xl hover:bg-[#083832] transition-all hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
