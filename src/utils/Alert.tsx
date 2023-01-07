import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../utils/alert.scss"

const MyPopUp = withReactContent(Swal)


export const Alert = {
    
error : MyPopUp.mixin({
  toast: true,
  position: "top",
  icon: "success",
  iconColor: "white",
  showCloseButton: true,
  customClass: {
    closeButton:
      "alertCloseBtn",
  },
  timer: 6000,
  showCancelButton: false,
  showConfirmButton: false,
  timerProgressBar: true,
  background: "#f75616",
  color: "white",
}),
success : MyPopUp.mixin({
  toast: true,
  position: "top",
  icon: "error",
  iconColor: "white",
  showCloseButton: true,
  customClass: {
     closeButton:
      "alertCloseBtn",
  },
  timer: 6000,
  showCancelButton: false,
  showConfirmButton: false,
  timerProgressBar: true,
  background: "green",
  color: "white",
}),

}




