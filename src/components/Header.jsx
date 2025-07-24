import React from "react";
import { useQuickActionModal } from "../modal/QuickActionModalContext.jsx";

const Header = () => {
  const { openModal } = useQuickActionModal();
  return (
    <header style={{ background: '#282c34', color: '#fff', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ margin: 0 }}>Notes App</h1>
      <button
        style={{ background: '#fff', color: '#282c34', padding: '0.5rem 1rem', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}
        onClick={() => openModal({ mode: 'create' })}
      >
        + Add Note
      </button>
    </header>
  );
};

export default Header;
