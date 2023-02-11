import React from 'react';
import { Alert } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Notification = ({ type, message }) => {
      const open = useSelector(state => state.ui.notification)
      const dispatch = useDispatch()
      function handleClose() {
            dispatch(uiActions.showNotifications({
                  open: false
            }))

      }
      return (
            <div>
                  {open && <Alert onClose={handleClose} severity={type} >{message} </Alert>}
            </div>
      );
}

export default Notification;
