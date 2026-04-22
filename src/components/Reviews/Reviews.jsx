import { useState } from 'react'
import { INITIAL_REVIEWS } from '../../data/reviews'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import styles from './Reviews.module.css'

export default function Reviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS)

  const handleNewReview = (review) => {
    const newReview = {
      id:   Date.now(),
      ...review,
    }
    setReviews((prev) => [newReview, ...prev])
  }

  return (
    <section id="reviews" className={`${styles.reviews} section-wrapper`}>
      <p className="section-label reveal">Opiniones</p>
      <h2 className="section-title reveal">Lo que dicen nuestros clientes</h2>
      <div className="section-line reveal" />

      {/* ─── Grid de reseñas ─── */}
      <div className={styles.grid}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* ─── Formulario ─── */}
      <ReviewForm onSubmit={handleNewReview} />
    </section>
  )
}
