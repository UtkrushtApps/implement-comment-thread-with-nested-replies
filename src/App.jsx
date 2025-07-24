import React from "react";
import Header from "./components/Header.jsx";
import PageBody from "./components/PageBody.jsx";
import QuickActionModal from "./modal/QuickActionModal.jsx";

const App = () => (
  <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', margin: 0, background: '#f9fafb' }}>
    <Header />
    <PageBody />
    <QuickActionModal />
  </div>
);

export default App;
