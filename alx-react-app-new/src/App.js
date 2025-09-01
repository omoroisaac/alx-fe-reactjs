import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <Header />

      {/* User Profiles */}
      <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <UserProfile name="Alice Johnson" age={29} bio="Loves hiking, photography, and exploring new cities." />
        <UserProfile name="Brian Smith" age={34} bio="A foodie who enjoys tasting cultural cuisines around the world." />
        <UserProfile name="Carla Mendes" age={27} bio="Passionate about art, architecture, and local history." />
      </section>

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
