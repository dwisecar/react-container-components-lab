import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Form from './Form'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        query: ''
    }

    componentDidUpdate(){
        this.fetchReviews()
    }

    fetchReviews = () => {
        fetch(`${URL}&query=${this.state.query}`).then(res => res.json()).then(data => this.setState({reviews: data.results}))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            query: e.target.value
        })
    }

    render(){
        return(
            <div className='reviews-container'>
                <Form handleSubmit={this.handleSubmit}/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}