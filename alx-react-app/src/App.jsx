import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./components/UserProfile";
<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;