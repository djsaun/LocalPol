let nextBookId = 0;
export const addBook = (title, author, review) => {
  return {
    type: 'ADD_BOOK',
    id: nextBookId++,
    title,
    author,
    review
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_REQUESTED'
    })

    dispatch({
      type: 'INCREMENT'
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_REQUESTED'
    })

    return setTimeout(() => {
      dispatch({
        type: 'INCREMENT'
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_REQUESTED'
    })

    dispatch({
      type: 'DECREMENT'
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_REQUESTED'
    })

    return setTimeout(() => {
      dispatch({
        type: 'DECREMENT'
      })
    }, 3000)
  }
}
