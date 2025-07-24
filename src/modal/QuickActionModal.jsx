import React, { useReducer, useEffect, useRef } from "react";
import { useQuickActionModal } from "./QuickActionModalContext.jsx";

const initialFormState = {
  title: '',
  description: '',
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    // Implementation required by candidate
    default:
      return state;
  }
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: '#fff',
  borderRadius: 10,
  padding: '2rem',
  minWidth: 350,
  boxShadow: '0 4px 24px rgba(60,60,60,0.14)',
  position: 'relative',
};

export default function QuickActionModal() {
  const { isOpen, closeModal, params } = useQuickActionModal();
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Should reset state when modal is opened or closed
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <button
          style={{ position: 'absolute', top: 10, right: 16, border: 'none', background: 'none', cursor: 'pointer', fontSize: 22, color: '#666' }}
          aria-label="Close Modal"
          onClick={closeModal}
        >
          ×
        </button>
        <h2 style={{ marginTop: 0 }}>
          {params?.mode === 'edit' ? 'Edit Note' : 'Create Note'}
        </h2>
        <form
          onSubmit={() => { /* Implementation required by candidate */ }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <input
            ref={inputRef}
            style={{ fontSize: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            placeholder="Title (required)"
            value={formState.title}
            onChange={() => { /* Implementation required by candidate */ }}
            aria-label="Title"
          />
          {formState.errors?.title && (
            <span style={{ color: '#dc143c', fontSize: 13 }}>{formState.errors.title}</span>
          )}
          <textarea
            style={{ fontSize: 15, padding: 8, borderRadius: 4, border: '1px solid #ccc', minHeight: 70 }}
            placeholder="Description"
            value={formState.description}
            onChange={() => { /* Implementation required by candidate */ }}
            aria-label="Description"
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button
              type="button"
              style={{ background: '#eee', color: '#333', border: 'none', padding: '0.5rem 1rem', borderRadius: 4, cursor: 'pointer' }}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{ background: '#4f8cff', color: '#fff', fontWeight: 600, border: 'none', padding: '0.5rem 1rem', borderRadius: 4, cursor: 'pointer' }}
            >
              {params?.mode === 'edit' ? 'Save' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
