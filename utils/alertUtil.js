import Swal from 'sweetalert2';

/**
 * 공통 얼럿 모음
 */
const commonAlert = Object.freeze({
    // 얼럿창
    alert: (title, msg, icon, cbFn) => {
        Swal.fire({
            title,
            text: msg,
            icon,
            confirmButtonColor: btnColor(icon),
        }).then((result) => {
            const { isConfirmed } = result;
            if(isConfirmed && cbFn) {
                // 실행되길 원하는 함수
                cbFn();
            }
        });
    },
    // 컨펌창
    confirm: (title, msg, cbFn, icon) => {
        Swal.fire({
            icon,
            title,
            html: msg,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            confirmButtonColor: '#5E72E4',
            focusConfirm: true,
        }).then((result) => {
            const { isConfirmed } = result;
            if(isConfirmed && cbFn) {
                // 실행되길 원하는 함수
                cbFn();
            }
        });
    },
    // 토스트
    toast: (icon, title) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 2000,
            didOpen(popup) {
                popup.addEventListener('mouseenter', Swal.stopTimer);
                popup.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon,
            title,
        });
    },
});

const btnColor = (icon) => {
    switch (icon) {
        case 'info':
            return '#11CDEF';
        case 'success':
            return '#2DCE89';
        case 'warning':
            return '#FB6340';
        case 'error':
            return '#F5365C';
        case 'question':
            return '#172B4D';
        default:
            return '#5E72E4';
    }
}

export default commonAlert;