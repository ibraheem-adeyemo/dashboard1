import { useState } from "react";

export interface ConfirmationDialogProps {
  handleClose?: () => void;
  onConfirm?: () => void;
}

export const useConfirmationDialog = ({
  handleClose,
  onConfirm,
}: ConfirmationDialogProps) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => {
    setOpen(false);
    handleClose?.();
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm?.();
  };

  return {
    open,
    openDialog,
    closeDialog,
    handleConfirm,
    setOpen,
  };
};
