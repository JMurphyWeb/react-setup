
const initialState = [{ title: 'Do this in Elm', complete: false, id: 0 }]

function todos (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        { id: 1
        , complete: false
        , text: action.text
        },
        ...state
      ]
    default:
      return state
  }
}


export default todos
