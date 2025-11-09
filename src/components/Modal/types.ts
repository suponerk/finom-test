export interface ModalProps {
  /** Whether the modal is currently open */
  isOpen: boolean;
  /** Callback function to close the modal */
  onClose: () => void;
  /** Content to render inside the modal */
  children: React.ReactNode;
  /** Optional title for the modal */
  title?: string;
  /** Optional class name for the modal root element */
  className?: string;
}