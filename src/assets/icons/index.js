import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleXmark,
  faCopyright,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faAt,
  faBars,
  faBug,
  faCartPlus,
  faCartShopping,
  faCircleCheck,
  faCircleExclamation,
  faHome,
  faLock,
  faMagnifyingGlass,
  faMinus,
  faPhone,
  faPlus,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Icons = {
  user: <FontAwesomeIcon icon={faUser} />,
  search: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  home: <FontAwesomeIcon icon={faHome} />,
  bars: <FontAwesomeIcon icon={faBars} />,
  cart: <FontAwesomeIcon icon={faCartShopping} />,
  arrowRigth: <FontAwesomeIcon icon={faArrowRight} />,
  warning: <FontAwesomeIcon icon={faCircleExclamation} />,
  success: <FontAwesomeIcon icon={faCircleCheck} />,
  error: <FontAwesomeIcon icon={faBug}/>,
  at: <FontAwesomeIcon icon={faAt} />,
  lock: <FontAwesomeIcon icon={faLock} />,
  eye: <FontAwesomeIcon icon={faEye} />,
  eyeSlash: <FontAwesomeIcon icon={faEyeSlash} />,
  phone: <FontAwesomeIcon icon={faPhone} />,
  shield: <FontAwesomeIcon icon={faShield} />,
  bell: <FontAwesomeIcon icon={faBell} />,
  copyRight: <FontAwesomeIcon icon={faCopyright} />,
  FB: <FontAwesomeIcon icon={faFacebook} />,
  IG: <FontAwesomeIcon icon={faInstagram} />,
  LK: <FontAwesomeIcon icon={faLinkedin} />,
  plus: <FontAwesomeIcon icon={faPlus} />,
  minus: <FontAwesomeIcon icon={faMinus} />,
  cartPlus: <FontAwesomeIcon icon={faCartPlus} />,
  close: <FontAwesomeIcon icon={faCircleXmark}/>
};

export default Icons;
