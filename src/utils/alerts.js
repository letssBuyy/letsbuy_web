import 'sweetalert2/dist/sweetalert2.css';
import './sweetalert2-custom.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export const success = (description) => {
    Swal.fire({
        title: 'OK!',
        text: description,
        icon: 'success',
    });
};

export const error = (description) => {
    Swal.fire({
        title: 'OOPS!',
        text: description,
        icon: 'error',
    });
};

export const toastSucess = (description) => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: description,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
};

export const toastError = (description) => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: description,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
};

export const question = (title, description, confirmText, isConfirmed) => {
    Swal.fire({
      title: title,
      text: description,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmText
    }).then((result) => {
      if (result.isConfirmed) {
        isConfirmed()
      }
    });
  };