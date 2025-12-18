import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { PatientDashboard } from './components/PatientDashboard';
import { BookingFlow } from './components/BookingFlow';
import { MyTherapies } from './components/MyTherapies';
import { FindDoctor } from './components/FindDoctor';
import { EmergencyMode } from './components/EmergencyMode';
import { AdminDashboard } from './components/AdminDashboard';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <PatientDashboard />;
      case 'book':
        return <BookingFlow />;
      case 'therapies':
        return <MyTherapies />;
      case 'find-doctor':
        return <FindDoctor />;
      case 'emergency':
        return <EmergencyMode />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1">
        {renderView()}
      </main>
      <AIAssistant />
    </div>
  );
}
