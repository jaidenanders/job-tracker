import TestFirebase from './components/TestFirebase';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-brown mb-4">
          Job Application Tracker
        </h1>
        <p className="text-lg text-dark-brown mb-8">
          Day 1: Project Setup Complete! 🎉
        </p>
        <TestFirebase />
      </div>
    </div>
  );
}

export default App;