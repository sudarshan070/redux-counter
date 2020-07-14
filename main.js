var inc = document.querySelector('.inc')
var dec = document.querySelector(".dec")
var reset = document.querySelector(".reset")
var h1 = document.querySelector("h1")

function counter(state = 0, action) {
    switch (action.type) {
        case 'inc':
            return state= state + 1
        case 'dec':
            return state=state - 1
        case 'reset':
            return state=0
        default:
            return state
    }
}

let store = Redux.createStore(counter)

store.subscribe(()=> h1.innerText=store.getState())


inc.addEventListener('click', () => {
    store.dispatch({ type: "inc" })
})

dec.addEventListener('click', () => {
    store.dispatch({ type: "dec" })
})
reset.addEventListener('click', () => {
    store.dispatch({ type: "reset" })
})

