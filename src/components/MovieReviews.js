import React from 'react'

const Review = ({
    headline,
    byline,
    summary_short
  }) => {
    return ( 
      <div className="review" >
            <h2>{headline}</h2>
            <h3>{byline}</h3>
            <p>{summary_short}</p>
      </div>
    )
}
  
const MovieReviews = ({reviews}) => <div>{reviews.map(Review)}</div>
  
MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews