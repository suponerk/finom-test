import { useEffect } from "react";
import "./styles.scss";
import closeIcon from "../../assets/close.svg";
import type { ModalProps } from "./types";

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = "",
}: ModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-backdrop ${className}`.trim()}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div className="modal-container">
        <div className="modal-header">
          {title && (
            <h2 className="modal-title" id="modal-title">
              {title}
            </h2>
          )}
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
