const getReviewById = (knex, reviewId) =>
  knex('reviews as r')
    .where({'r.review_id': Number(reviewId)})
    .select('r.*')
    .first();

const updateReview = (knex, review) => 
  knex('reviews')
    .update(review)
    .where({'reviews.review_id': review.review_id})

const deleteReviewById = (knex, reviewId) => 
  knex('reviews as r')
    .delete()
    .where({'r.review_id': reviewId});

module.exports = {
  getReviewById,
  updateReview,
  deleteReviewById,
}