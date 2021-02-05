import React from 'react'

const Form = props => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type='text'
                    name='query'
                    
                />
                <button>Search</button>
            </form>
        </div>
    )
}
export default Form