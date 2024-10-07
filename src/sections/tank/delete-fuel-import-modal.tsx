import React from 'react';

import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const DeleteFuelImportDialog = ({ open, onClose, onConfirm } : any) => (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Xác Nhận Xóa</DialogTitle>
      <DialogContent>
        Bạn chắc chắn muốn xóa hàng này không?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Hủy
        </Button>
        <Button 
          onClick={() => {
            onConfirm(); // Gọi hàm xác nhận khi nhấn nút Xóa
            onClose(); // Đóng modal
          }} 
          color="error">
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );

export default DeleteFuelImportDialog;
