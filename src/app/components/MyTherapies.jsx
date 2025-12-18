import { Clock } from 'lucide-react';
import { Progress } from './ui/progress';

export function MyTherapies() {
  const therapies = [
    {
      name: 'Shirodhara Cycle',
      therapist: 'Dr. Sarah Johnson',
      progress: 40,
      completed: 2,
      total: 5,
      nextSession: 'Tomorrow, 10:00 AM',
      status: 'active'
    },
    {
      name: 'Abhyanga Massage',
      therapist: 'Dr. Rakesh Kumar',
      progress: 75,
      completed: 3,
      total: 4,
      nextSession: 'Dec 20, 09:00 AM',
      status: 'active'
    },
    {
      name: 'Panchakarma Detox',
      therapist: 'Dr. Priya Mehta',
      progress: 100,
      completed: 7,
      total: 7,
      nextSession: 'Completed',
      status: 'completed'
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="font-['Playfair_Display'] text-4xl mb-2 text-gray-900">
          My Therapies
        </h1>
        <p className="text-gray-500 font-['Inter']">Track your ongoing treatments and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {therapies.map((therapy, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl text-gray-900 mb-1">
                  {therapy.name}
                </h3>
                <p className="text-sm text-gray-600 font-['Inter']">{therapy.therapist}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] ${
                therapy.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {therapy.status === 'completed' ? 'Completed' : 'Active'}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 font-['Inter']">Progress</span>
                <span className="text-sm font-['Inter'] text-[#0E4D45]">
                  {therapy.completed}/{therapy.total} sessions • {therapy.progress}%
                </span>
              </div>
              <Progress value={therapy.progress} className="h-2" />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="font-['Inter']">Next: {therapy.nextSession}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
