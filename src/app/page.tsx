import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to the Pet Store</h1>
      <p>Use the sidebar to navigate through the pet management features.</p>
    </div>
  );
}
