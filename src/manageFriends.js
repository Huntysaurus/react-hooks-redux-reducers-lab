const initialState = { friends: [] }

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      return { friends: [state.friends, ...friend.id]}
    case "friends/remove":
      return { friends: state.friends.splice(id)}
    default:
      return state
  }
}
