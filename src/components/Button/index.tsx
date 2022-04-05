import React from 'react';
import styles from '../../styles/Button.module.css';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button className={styles.btn}>{text}</button>;
}
export default Button;
