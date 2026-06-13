import styles from './InfoCard.module.scss';
import { SWAGGER_DOCS_URL } from '@/lib/constants';

const PawIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="6" cy="5.5" r="2" />
    <circle cx="10.5" cy="3.5" r="2" />
    <circle cx="15" cy="3.5" r="2" />
    <circle cx="19" cy="5.5" r="2" />
    <path d="M12 9c-3.5 0-7 2.5-7 5.5 0 2.5 1.5 4.5 3 5.5.8.5 2.2.5 4 .5s3.2 0 4-.5c1.5-1 3-3 3-5.5 0-3-3.5-5.5-7-5.5z" />
  </svg>
);

export const InfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <PawIcon />
      </div>
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <p className={styles.name}>Swagger Petstore</p>
          <p className={styles.description}>Demo API</p>
        </div>
        <a
          href={SWAGGER_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on Swagger
        </a>
      </div>
    </div>
  );
};
