import { Home, Calendar, Activity, Stethoscope, AlertCircle, Settings } from 'lucide-react';

export function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'book', label: 'Book Appointment', icon: Calendar },
    { id: 'therapies', label: 'My Therapies', icon: Activity },
    { id: 'find-doctor', label: 'Find Doctor', icon: Stethoscope },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle },
  ];

  const adminItems = [
    { id: 'admin', label: 'Admin Portal', icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#0E4D45] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <span className="font-['Playfair_Display'] text-xl">AyurSutra</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-['Inter']">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Management Section */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-wide text-white/40 px-4 mb-2 font-['Inter']">
            Management
          </div>
          <div className="space-y-1">
            {adminItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-['Inter']">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="font-['Inter']">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-['Inter'] truncate">John Doe</div>
            <div className="text-xs text-white/60 font-['Inter']">Patient ID: #8533</div>
          </div>
        </div>
      </div>
    </div>
  );
}
