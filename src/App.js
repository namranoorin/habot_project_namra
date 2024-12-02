import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BuyerSection from './components/BuyerSection';
import SignupSection from './components/SignupSection';
import Footer from './components/Footer';
import Supplier from './components/Supplier'
import Offer from './components/Offer'
function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <BuyerSection />
      <SignupSection />
      <Supplier/>
      <Offer/>
      <Footer />
    </div>
  );
}

export default App;
