import { Users, Activity, DollarSign, UserCheck, TrendingUp, MapPin, Ambulance, Brain, AlertTriangle, Edit } from 'lucide-react';
import emergencyMapImg from 'figma:asset/73af87f18d41b11b8986240287523d079caee03a.png';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Patients', value: '1,284', change: '+6% this month', icon: Users, color: 'blue' },
    { label: 'Active Therapies', value: '342', change: '+12 today', icon: Activity, color: 'green' },
    { label: 'Revenue (MTD)', value: '₹45.2k', change: '+8% vs last month', icon: DollarSign, color: 'purple' },
    { label: 'Staff Online', value: '28', change: '4 on break', icon: UserCheck, color: 'orange' },
  ];

  const staffMembers = [
    { id: 'SM', name: 'Dr. Sarah Miles', role: 'Cardiologist', status: 'Active', lastActive: '2 mins ago', color: 'bg-blue-500' },
    { id: 'AF', name: 'Dr. Albert Flores', role: 'Neuro Surgeon', status: 'Offline', lastActive: '1 hour ago', color: 'bg-purple-500' },
    { id: 'RK', name: 'Dr. Rakesh Kumar', role: 'Panchakarma Specialist', status: 'Active', lastActive: '5 mins ago', color: 'bg-green-500' },
    { id: 'PM', name: 'Dr. Priya Mehta', role: 'Ayurveda Consultant', status: 'Active', lastActive: '1 min ago', color: 'bg-pink-500' },
  ];

  const ambulanceFleet = [
    { id: 'AMB-04', status: 'In Transit', location: 'Rajinder Nagar', eta: '5 mins', driver: 'Rajesh Kumar' },
    { id: 'AMB-07', status: 'Available', location: 'Base Station', eta: '-', driver: 'Amit Singh' },
    { id: 'AMB-12', status: 'In Transit', location: 'Aruna Nagar', eta: '8 mins', driver: 'Suresh Patel' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Playfair_Display'] text-4xl mb-2 text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 font-['Inter']">Command center for AyurSutra operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-['Inter']">{stat.label}</div>
              <div className="text-3xl font-['Playfair_Display'] mb-1 text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-400 font-['Inter']">{stat.change}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Staff Management */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="font-['Playfair_Display'] text-xl text-gray-900">Staff Management</h2>
                <button className="text-[#0E4D45] hover:underline font-['Inter']">Add New User</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-['Inter']">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-['Inter']">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-['Inter']">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-['Inter']">
                      Last Active
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-['Inter']">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {staffMembers.map((staff) => (
                    <tr key={staff.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${staff.color} rounded-full flex items-center justify-center text-white`}>
                            {staff.id}
                          </div>
                          <span className="font-['Inter']">{staff.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-['Inter']">
                        {staff.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] ${
                          staff.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {staff.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-['Inter']">
                        {staff.lastActive}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ambulance Fleet Tracking */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
              <div className="flex items-center gap-3">
                <Ambulance className="w-6 h-6" />
                <h2 className="font-['Playfair_Display'] text-xl">Ambulance Fleet Tracking</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <img 
                  src={emergencyMapImg}
                  alt="Fleet Map"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              <div className="space-y-3">
                {ambulanceFleet.map((ambulance) => (
                  <div 
                    key={ambulance.id}
                    className={`p-4 rounded-xl border-2 ${
                      ambulance.status === 'In Transit' 
                        ? 'border-red-200 bg-red-50' 
                        : 'border-green-200 bg-green-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          ambulance.status === 'In Transit' ? 'bg-red-500' : 'bg-green-500'
                        }`}>
                          <Ambulance className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-['Inter']">{ambulance.id}</div>
                          <div className="text-sm text-gray-600 font-['Inter']">{ambulance.driver}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-['Inter'] ${
                          ambulance.status === 'In Transit' ? 'text-red-700' : 'text-green-700'
                        }`}>
                          {ambulance.status}
                        </div>
                        <div className="text-xs text-gray-500 font-['Inter']">
                          {ambulance.location} {ambulance.eta !== '-' && `• ETA: ${ambulance.eta}`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Predictive Staffing */}
        <div className="space-y-6">
          {/* Predictive Staffing Widget */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-sm border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-lg text-gray-900">
                  AI Predictive Staffing
                </h3>
                <p className="text-xs text-gray-600 font-['Inter']">Based on predicted patient load</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="text-sm text-gray-600 mb-2 font-['Inter']">Today's Prediction</div>
                <div className="text-2xl font-['Playfair_Display'] text-purple-700 mb-1">High Volume</div>
                <div className="text-xs text-gray-500 font-['Inter']">Expected: 180-220 patients</div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="font-['Inter'] mb-1">AI Recommendation</div>
                    <div className="text-sm opacity-90 font-['Inter']">
                      Add 3 more staff for evening shift (4-8 PM)
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition-colors font-['Inter']">
                  View Details
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-['Inter']">
                  Suggested Staff
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-['Inter']">Dr. Priya Mehta</div>
                      <div className="text-xs text-gray-500 font-['Inter']">Ayurveda Consultant</div>
                    </div>
                    <button className="text-purple-600 hover:underline text-sm font-['Inter']">
                      Notify
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-['Inter']">Dr. Rakesh Kumar</div>
                      <div className="text-xs text-gray-500 font-['Inter']">Panchakarma Specialist</div>
                    </div>
                    <button className="text-purple-600 hover:underline text-sm font-['Inter']">
                      Notify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-['Playfair_Display'] text-lg text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-[#E0F2F1] hover:bg-[#B2DFDB] rounded-lg transition-colors font-['Inter']">
                Send Staff Alert
              </button>
              <button className="w-full text-left p-3 bg-[#E0F2F1] hover:bg-[#B2DFDB] rounded-lg transition-colors font-['Inter']">
                View All Therapies
              </button>
              <button className="w-full text-left p-3 bg-[#E0F2F1] hover:bg-[#B2DFDB] rounded-lg transition-colors font-['Inter']">
                Generate Report
              </button>
              <button className="w-full text-left p-3 bg-[#E0F2F1] hover:bg-[#B2DFDB] rounded-lg transition-colors font-['Inter']">
                Manage Inventory
              </button>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-['Playfair_Display'] text-lg text-gray-900 mb-4">System Health</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-['Inter']">Server Status</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-['Inter']">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-['Inter']">AI Models</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-['Inter']">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-['Inter']">Database</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-['Inter']">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
