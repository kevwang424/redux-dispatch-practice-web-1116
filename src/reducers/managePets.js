export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return Object.assign({}, state, {pets: [...state.pets, action.payload]})
    case "REMOVE_PET":
      return Object.assign({}, state, {pets: state.pets.filter(function(pet){
      if(pet.id !== action.payload){
        return pet
      }
    })})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){

  let pets = state.pets.map(function(pet){
    return `<li>${pet.name}</li>`
  })

  let petsJoin = pets.join(" ")

  let container = document.getElementById('container')

  container.innerHtml= `<ul>${petsJoin}</ul>`


}

// dispatch({type: "@@INIT"})

// state.pets.forEach(function(pet){
//   let node = document.createElement("li")
//   let textnode = document.createTextNode(pet.name)
//   node.appendChild(textnode)
//   list.appendChild(node)
// })
