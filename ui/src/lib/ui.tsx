import { util } from '@vite/util';
import styles from './ui.module.css';

export function Ui() {
  const val = util();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui! {val}</h1>
    </div>
  );
}

export default Ui;
