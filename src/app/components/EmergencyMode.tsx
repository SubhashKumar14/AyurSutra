import { AlertCircle, Ambulance, Phone, MessageSquare, MapPin, Clock, Navigation } from 'lucide-react';
import { useState } from 'react';
import emergencyMapImg from 'figma:asset/73af87f18d41b11b8986240287523d079caee03a.png';

export function EmergencyMode() {
  const [isDispatched, setIsDispatched] = useState(false);
  const [emergencyDescription, setEmergencyDescription] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{type: 'ai' | 'user', text: string}>>([
    { type: 'ai', text: 'Emergency AI Responder here. I\'ve received your alert. Can you describe the emergency?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleDispatch = () => {
    setIsDispatched(true);
    setChatMessages(prev => [...prev, 
      { type: 'ai', text: 'Ambulance dispatched! Vehicle #AMB-04 is en route. ETA: 5 minutes. Stay calm, help is on the way.' }
    ]);
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    setChatInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, 
        { type: 'ai', text: 'I understand. Stay where you are. The ambulance is just 3 minutes away. Can you tell me if the patient is conscious?' }
      ]);
    }, 1000);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-red-50 to-white min-h-screen">
      {/* Emergency Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
          <AlertCircle className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="font-['Playfair_Display'] text-4xl text-red-600">
            Emergency Response
          </h1>
          <p className="text-gray-600 font-['Inter']">Live Status: Monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Emergency Actions */}
        <div className="space-y-6">
          {/* Emergency Description */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
            <h3 className="font-['Playfair_Display'] text-xl mb-4 text-gray-900">
              What is the emergency?
            </h3>
            <textarea
              value={emergencyDescription}
              onChange={(e) => setEmergencyDescription(e.target.value)}
              placeholder="Describe symptoms (e.g., Chest pain, severe bleeding...)"
              rows={3}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 font-['Inter']"
            />
          </div>

          {/* Dispatch Button */}
          {!isDispatched ? (
            <button
              onClick={handleDispatch}
              className="w-full bg-red-600 hover:bg-red-700 text-white p-8 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              <Ambulance className="w-16 h-16 mx-auto mb-4" />
              <div className="font-['Playfair_Display'] text-3xl mb-2">DISPATCH AMBULANCE</div>
              <div className="text-sm opacity-90 font-['Inter']">Location auto-detected</div>
            </button>
          ) : (
            <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-6 animate-in fade-in duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Ambulance className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl text-green-900">
                    Ambulance Dispatched
                  </h3>
                  <p className="text-sm text-green-700 font-['Inter']">Vehicle #AMB-04 is en route</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1 font-['Inter']">ETA</div>
                  <div className="text-2xl font-['Playfair_Display'] text-green-600">5 mins</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1 font-['Inter']">Distance</div>
                  <div className="text-2xl font-['Playfair_Display'] text-green-600">2.3 km</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Navigation className="w-4 h-4 text-green-600" />
                  <span className="font-['Inter']">AI Agent calculating fastest route...</span>
                </div>
                <div className="text-xs text-gray-500 font-['Inter']">
                  Route optimized: Avoiding Rajinder Nagar traffic via Aruna Nagar
                </div>
              </div>
            </div>
          )}

          {/* Call Emergency Hotline */}
          <button className="w-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 p-4 rounded-xl transition-colors flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" />
            <span className="font-['Inter']">Call Emergency Hotline</span>
          </button>

          {/* Live Chat with AI Responder */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 overflow-hidden">
            <div className="bg-red-600 text-white p-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                <div>
                  <div className="font-['Playfair_Display']">Emergency AI Responder</div>
                  <div className="text-xs opacity-90 font-['Inter']">Real-time assistance</div>
                </div>
              </div>
            </div>

            <div className="h-64 overflow-y-auto p-4 bg-gray-50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`mb-3 ${msg.type === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs font-['Inter'] ${
                    msg.type === 'ai'
                      ? 'bg-red-100 text-red-900'
                      : 'bg-[#0E4D45] text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 font-['Inter']"
                />
                <button 
                  onClick={sendMessage}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map & Tracking */}
        <div className="space-y-6">
          {/* Real-time Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-200">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <div className="font-['Playfair_Display']">Agentic Dispatch - Real-time Tracking</div>
                  <div className="text-xs opacity-90 font-['Inter']">AI-optimized route in progress</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={emergencyMapImg}
                alt="Emergency Map"
                className="w-full h-96 object-cover"
              />
              
              {isDispatched && (
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-['Inter']">Ambulance in transit</span>
                  </div>
                  <div className="text-xs text-gray-600 font-['Inter']">
                    <div>Vehicle: AMB-04</div>
                    <div>Driver: Rajesh Kumar</div>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-red-600 text-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-['Inter']">Your Location</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Route Analysis */}
          {isDispatched && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 animate-in fade-in duration-500">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg text-gray-900">
                    AI Route Optimization
                  </h3>
                  <p className="text-sm text-gray-600 font-['Inter']">
                    Our AI agent analyzed 3 possible routes and selected the fastest option
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm font-['Inter']">Selected Route</div>
                  <div className="text-sm font-['Inter']">5 mins • 2.3 km</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border-l-4 border-gray-300 opacity-60">
                  <div className="text-sm font-['Inter']">Alternative 1</div>
                  <div className="text-sm font-['Inter']">8 mins • 3.1 km</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border-l-4 border-gray-300 opacity-60">
                  <div className="text-sm font-['Inter']">Alternative 2</div>
                  <div className="text-sm font-['Inter']">12 mins • 2.8 km</div>
                </div>
              </div>
            </div>
          )}

          {/* Emergency Instructions */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-200">
            <h3 className="font-['Playfair_Display'] text-lg text-gray-900 mb-3">
              While You Wait
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-['Inter']">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                Stay calm and keep the patient comfortable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                Do not move the patient unless absolutely necessary
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                Keep the phone line open for further instructions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                Prepare any medical documents if available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
