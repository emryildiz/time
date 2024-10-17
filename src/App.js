import './App.css';
import { ProfileCard } from './components/profile-card';
import { TimeCards } from './components/time-cards';
import { TimeframeProvider } from './context/TimeFrameContext';

function App() {
  return (
      <div className="App">
    <TimeframeProvider>
      <ProfileCard></ProfileCard>
      <TimeCards></TimeCards>
      </TimeframeProvider>
    </div>
  );
}

export default App;
