import React from "react";
import { useQuickActionModal } from "../modal/QuickActionModalContext.jsx";

const PageBody = () => {
  const { openModal } = useQuickActionModal();

  return (
    <main style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <p>Welcome! Try adding a quick note using the global action modal, accessible from anywhere.</p>
      <button
        style={{ background: '#4f8cff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}
        onClick={() => openModal({ mode: 'create' })}
      >
        + Quick Add from Body
      </button>
    </main>
  );
};

export default PageBody;
