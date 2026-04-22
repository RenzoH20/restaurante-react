import styles from './Reviews.module.css'

/**
 * Tarjeta de una reseña individual.
 */
export default function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className={`${styles.card} reveal`}>
      <div className={styles.stars}>
        {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
      </div>
      <p className={styles.text}>"{review.text}"</p>
      <div className={styles.reviewer}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.date}>{review.date}</div>
        </div>
      </div>
    </div>
  )
}
