import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

export default function ButtonBack({type,onClick,children}) {
  return (
    <div onClick={onClick}  className={`${styles.btn}  ${styles[type]}`} >
            {children} 
    </div>
  )
}
