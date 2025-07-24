import React, { createContext, useContext, useState } from "react";

const QuickActionModalContext = createContext(null);

export function QuickActionModalProvider({ children }) {
  const [modalState, setModalState] = useState({ open: false, params: null });

  const openModal = (params) => {
    setModalState({ open: true, params });
  };

  const closeModal = () => {
    setModalState({ open: false, params: null });
  };

  return (
    <QuickActionModalContext.Provider value={{
      openModal,
      closeModal,
      isOpen: modalState.open,
      params: modalState.params,
    }}>
      {children}
    </QuickActionModalContext.Provider>
  );
}

export function useQuickActionModal() {
  const ctx = useContext(QuickActionModalContext);
  if (!ctx) {
    throw new Error("useQuickActionModal must be used within QuickActionModalProvider");
  }
  return ctx;
}
