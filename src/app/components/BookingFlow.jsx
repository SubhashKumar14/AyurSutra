import { useState } from 'react';
import { User, Users, ChevronRight, Sparkles, Check, QrCode, Calendar, Clock } from 'lucide-react';
import { Progress } from './ui/progress';

export function BookingFlow() {
  const [step, setStep] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSymptomAnalysis = () => {
    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      setAiSuggestion({
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Panchakarma Specialist',
        therapy: 'Shirodhara Therapy',
        reason: 'Based on your symptoms (stress, headache, sleep issues), Shirodhara therapy is highly recommended. This treatment calms the nervous system and promotes deep relaxation.',
        confidence: 94,
        nextAvailable: 'Tomorrow, 10:00 AM'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const progressValue = (step / 3) * 100;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Playfair_Display'] text-4xl mb-2 text-gray-900">
          Book an Appointment
        </h1>
        <p className="text-gray-500 font-['Inter']">AI-powered specialist matching in 3 simple steps</p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#0E4D45]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-[#0E4D45] text-white' : 'bg-gray-200'
            }`}>
              {step > 1 ? <Check className="w-5 h-5" /> : '1'}
            </div>
            <span className="font-['Inter']">Select Profile</span>
          </div>

          <div className="flex-1 h-1 mx-4 bg-gray-200">
            <div
              className="h-full bg-[#0E4D45] transition-all duration-500"
              style={{ width: step >= 2 ? '100%' : '0%' }}
            />
          </div>

          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#0E4D45]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-[#0E4D45] text-white' : 'bg-gray-200'
            }`}>
              {step > 2 ? <Check className="w-5 h-5" /> : '2'}
            </div>
            <span className="font-['Inter']">AI Match</span>
          </div>

          <div className="flex-1 h-1 mx-4 bg-gray-200">
            <div
              className="h-full bg-[#0E4D45] transition-all duration-500"
              style={{ width: step >= 3 ? '100%' : '0%' }}
            />
          </div>

          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#0E4D45]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-[#0E4D45] text-white' : 'bg-gray-200'
            }`}>
              3
            </div>
            <span className="font-['Inter']">Confirm</span>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto">
        {/* Step 1: Select Profile */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="font-['Playfair_Display'] text-2xl mb-6">Who is this appointment for?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedProfile('myself')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedProfile === 'myself'
                    ? 'border-[#0E4D45] bg-[#E0F2F1]'
                    : 'border-gray-200 bg-white hover:border-[#0E4D45]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    selectedProfile === 'myself' ? 'bg-[#0E4D45]' : 'bg-gray-100'
                  }`}>
                    <User className={`w-8 h-8 ${selectedProfile === 'myself' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-['Inter'] text-lg mb-1">Myself</h3>
                    <p className="text-sm text-gray-500 font-['Inter']">Book for John Doe</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setSelectedProfile('family')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedProfile === 'family'
                    ? 'border-[#0E4D45] bg-[#E0F2F1]'
                    : 'border-gray-200 bg-white hover:border-[#0E4D45]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    selectedProfile === 'family' ? 'bg-[#0E4D45]' : 'bg-gray-100'
                  }`}>
                    <Users className={`w-8 h-8 ${selectedProfile === 'family' ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-['Inter'] text-lg mb-1">Family Member</h3>
                    <p className="text-sm text-gray-500 font-['Inter']">Book for someone else</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => selectedProfile && setStep(2)}
                disabled={!selectedProfile}
                className="flex items-center gap-2 bg-[#0E4D45] text-white px-6 py-3 rounded-lg hover:bg-[#083832] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-['Inter']"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: AI Specialist Match */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#0E4D45]" />
              <h2 className="font-['Playfair_Display'] text-2xl">AI Specialist Matching</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <label className="block mb-2 font-['Inter']">
                Describe your symptoms or health concerns
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="E.g., I've been experiencing stress, frequent headaches, and difficulty sleeping..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E4D45] font-['Inter']"
              />

              <button
                onClick={handleSymptomAnalysis}
                disabled={!symptoms || isAnalyzing}
                className="mt-4 flex items-center gap-2 bg-[#0E4D45] text-white px-6 py-3 rounded-lg hover:bg-[#083832] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-['Inter']"
              >
                <Sparkles className="w-5 h-5" />
                {isAnalyzing ? 'Analyzing...' : 'Get AI Recommendations'}
              </button>
            </div>

            {isAnalyzing && (
              <div className="bg-gradient-to-r from-[#E0F2F1] to-white rounded-2xl p-6 border border-[#0E4D45]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0E4D45] rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-['Inter'] text-gray-900">AI Agent is analyzing...</div>
                    <div className="text-sm text-gray-600 font-['Inter']">Matching symptoms with best specialists and therapies</div>
                  </div>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            )}

            {aiSuggestion && (
              <div className="bg-gradient-to-br from-[#0E4D45] to-[#1a6158] text-white rounded-2xl p-6 shadow-lg animate-in fade-in duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm opacity-80 mb-1 font-['Inter']">AI Recommendation</div>
                    <h3 className="font-['Playfair_Display'] text-2xl">{aiSuggestion.doctor}</h3>
                    <p className="text-sm opacity-90 font-['Inter']">{aiSuggestion.specialty}</p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-['Inter']">
                    {aiSuggestion.confidence}% Match
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="font-['Inter'] mb-2">Recommended Therapy</h4>
                  <div className="text-xl font-['Playfair_Display'] mb-2">{aiSuggestion.therapy}</div>
                  <p className="text-sm opacity-90 font-['Inter']">{aiSuggestion.reason}</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span className="font-['Inter']">Next available: {aiSuggestion.nextAvailable}</span>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="text-[#0E4D45] hover:underline font-['Inter']"
              >
                Back
              </button>
              <button
                onClick={() => aiSuggestion && setStep(3)}
                disabled={!aiSuggestion}
                className="flex items-center gap-2 bg-[#0E4D45] text-white px-6 py-3 rounded-lg hover:bg-[#083832] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-['Inter']"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation with QR Code */}
        {step === 3 && aiSuggestion && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="font-['Playfair_Display'] text-2xl mb-6">Confirm Your Appointment</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-['Inter'] text-lg mb-4">Appointment Details</h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1 font-['Inter']">Patient</div>
                    <div className="font-['Inter']">
                      {selectedProfile === 'myself' ? 'John Doe' : 'Family Member'}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1 font-['Inter']">Doctor</div>
                    <div className="font-['Inter']">{aiSuggestion.doctor}</div>
                    <div className="text-sm text-gray-600 font-['Inter']">{aiSuggestion.specialty}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1 font-['Inter']">Therapy</div>
                    <div className="font-['Inter']">{aiSuggestion.therapy}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1 font-['Inter']">Date</div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0E4D45]" />
                        <span className="font-['Inter']">Tomorrow</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1 font-['Inter']">Time</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0E4D45]" />
                        <span className="font-['Inter']">10:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#E0F2F1] rounded-lg p-4 mt-4">
                    <div className="text-sm text-[#0E4D45] font-['Inter']">
                      <strong>AI Match Confidence:</strong> {aiSuggestion.confidence}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-['Inter']">
                      This recommendation is based on your symptoms and our AI analysis
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0E4D45] to-[#1a6158] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                <QrCode className="w-32 h-32 mb-4" />
                <h3 className="font-['Playfair_Display'] text-xl mb-2 text-center">
                  Your Appointment QR Code
                </h3>
                <p className="text-sm text-center opacity-90 mb-4 font-['Inter']">
                  Show this code at the reception desk
                </p>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-mono">
                  APT-2025-00142
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(2)}
                className="text-[#0E4D45] hover:underline font-['Inter']"
              >
                Back
              </button>
              <button
                className="flex items-center gap-2 bg-[#0E4D45] text-white px-8 py-3 rounded-lg hover:bg-[#083832] transition-colors font-['Inter']"
              >
                <Check className="w-5 h-5" />
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
