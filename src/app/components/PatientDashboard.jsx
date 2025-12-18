import { Clock, MapPin, Calendar, Heart, Activity as ActivityIcon, Bell } from 'lucide-react';
import { Progress } from './ui/progress';
import dashboardImg from '../../assets/eed487263e326d80184c5f185c6c914c4db6226f.png';

export function PatientDashboard() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Playfair_Display'] text-4xl mb-2 text-gray-900">
          Welcome back, John
        </h1>
        <p className="text-gray-500 font-['Inter']">Here's your health overview for today.</p>
        <p className="text-sm text-gray-400 font-['Inter'] mt-1">Current Date: {currentDate}</p>
      </div>

      {/* Smart Notifications */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <Bell className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <div className="font-['Inter'] text-blue-900">
              AI Agent auto-rescheduled your session due to doctor unavailability
            </div>
            <div className="text-sm text-blue-700 font-['Inter'] mt-1">
              Your Shirodhara session has been moved to tomorrow at 10:00 AM with Dr. Sarah Johnson
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Token Status */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#0E4D45] to-[#1a6158] text-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm opacity-80 mb-2 font-['Inter']">Current Token</div>
            <div className="text-6xl font-['Playfair_Display'] mb-4">A107</div>

            <div className="flex items-center gap-2 mb-4 text-sm opacity-90">
              <Clock className="w-4 h-4" />
              <span className="font-['Inter']">Est. Wait: 15 mins</span>
            </div>

            <div className="bg-white/10 rounded-lg p-3 mb-4">
              <div className="text-xs opacity-80 mb-1 font-['Inter']">Your Position: #8</div>
              <div className="flex justify-between items-center">
                <Progress value={65} className="flex-1 h-2" />
              </div>
            </div>

            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition-colors font-['Inter']">
              View Queue
            </button>
          </div>
        </div>

        {/* Upcoming Therapy & Health Vitals */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Session */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Playfair_Display'] text-xl text-gray-900">Upcoming Session</h3>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-['Inter']">
                Confirmed
              </span>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 bg-[#E0F2F1] rounded-xl flex items-center justify-center">
                <ActivityIcon className="w-8 h-8 text-[#0E4D45]" />
              </div>
              <div className="flex-1">
                <h4 className="font-['Inter'] text-lg mb-1">Shirodhara Session</h4>
                <div className="text-sm text-gray-600 font-['Inter']">
                  Dr. Sarah Johnson • Ayurveda Center
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-['Inter']">09:00 AM - Tomorrow</span>
                  </div>
                </div>
              </div>
              <button className="text-[#0E4D45] hover:bg-[#E0F2F1] px-4 py-2 rounded-lg transition-colors font-['Inter']">
                Reschedule
              </button>
            </div>
          </div>

          {/* Health Vitals */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Playfair_Display'] text-xl text-gray-900">Health Vitals</h3>
              <Heart className="w-5 h-5 text-red-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500 mb-2 font-['Inter']">Pulse (bpm)</div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-['Playfair_Display']">72</span>
                  <span className="text-sm text-gray-400 mb-1 font-['Inter']">Normal</span>
                </div>
                <Progress value={72} className="h-2 mt-2" />
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-2 font-['Inter']">SpO2 (%)</div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-['Playfair_Display']">98</span>
                  <span className="text-sm text-gray-400 mb-1 font-['Inter']">Excellent</span>
                </div>
                <Progress value={98} className="h-2 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Therapy Progress */}
      <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-['Playfair_Display'] text-xl text-gray-900">Therapy Progress</h3>
          <button className="text-[#0E4D45] hover:underline font-['Inter']">View All</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={dashboardImg}
              alt="Therapy"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-['Inter']">Shirodhara Cycle</h4>
                <span className="text-sm text-[#0E4D45] font-['Inter']">40% Complete</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 font-['Inter']">2/5 Sessions completed</div>
              <Progress value={40} className="h-2" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] rounded-xl flex items-center justify-center">
              <ActivityIcon className="w-8 h-8 text-[#0E4D45]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-['Inter']">Abhyanga Massage</h4>
                <span className="text-sm text-[#0E4D45] font-['Inter']">75% Complete</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 font-['Inter']">3/4 Sessions completed</div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Dosha Analysis Widget */}
      <div className="mt-6 bg-gradient-to-br from-[#E0F2F1] to-white rounded-2xl p-6 shadow-sm border border-[#0E4D45]/10">
        <h3 className="font-['Playfair_Display'] text-xl text-gray-900 mb-4">AI Dosha Analysis</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl font-['Playfair_Display'] text-purple-700">35%</span>
            </div>
            <div className="font-['Inter'] text-gray-700">Vata</div>
            <div className="text-xs text-gray-500 font-['Inter']">Air & Space</div>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl font-['Playfair_Display'] text-red-700">45%</span>
            </div>
            <div className="font-['Inter'] text-gray-700">Pitta</div>
            <div className="text-xs text-gray-500 font-['Inter']">Fire & Water</div>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl font-['Playfair_Display'] text-green-700">20%</span>
            </div>
            <div className="font-['Inter'] text-gray-700">Kapha</div>
            <div className="text-xs text-gray-500 font-['Inter']">Earth & Water</div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="text-sm text-gray-600 font-['Inter']">
            <strong>AI Recommendation:</strong> Your predominant Pitta dosha suggests focusing on cooling therapies.
            Shirodhara is excellent for you. Consider adding coconut oil-based treatments.
          </p>
        </div>
      </div>
    </div>
  );
}
