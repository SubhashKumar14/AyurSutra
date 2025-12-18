import { Search, Star, MapPin, Calendar } from 'lucide-react';

export function FindDoctor() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Panchakarma Specialist',
      rating: 4.9,
      experience: '15 years',
      location: 'Ayurveda Center',
      availability: 'Available Today'
    },
    {
      name: 'Dr. Rakesh Kumar',
      specialty: 'Ayurveda Consultant',
      rating: 4.8,
      experience: '12 years',
      location: 'Wellness Clinic',
      availability: 'Available Tomorrow'
    },
    {
      name: 'Dr. Priya Mehta',
      specialty: 'Holistic Medicine',
      rating: 4.7,
      experience: '10 years',
      location: 'Health Center',
      availability: 'Available Today'
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="font-['Playfair_Display'] text-4xl mb-2 text-gray-900">
          Find a Doctor
        </h1>
        <p className="text-gray-500 font-['Inter']">Search for specialists and book appointments</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, specialty, or condition..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E4D45] font-['Inter']"
          />
        </div>
      </div>

      <div className="space-y-4">
        {doctors.map((doctor, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-[#E0F2F1] rounded-full flex items-center justify-center">
                  <span className="font-['Playfair_Display'] text-xl text-[#0E4D45]">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 font-['Inter'] mb-2">{doctor.specialty}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-['Inter']">{doctor.rating}</span>
                    </div>
                    <span className="font-['Inter']">{doctor.experience} experience</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-['Inter']">{doctor.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#0E4D45] text-white px-6 py-2 rounded-lg hover:bg-[#083832] transition-colors font-['Inter']">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
