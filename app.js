const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');
const heading = document.querySelector('h1');

function render() {
    store.dispatch({ type: 'normal', payload: 'ಠ_ಠ' })
    const state = store.getState();
    heading.innerText = state.face;
}

happyBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'happy', payload: 'ʘ‿ʘ' });
    const state = store.getState();
    heading.innerText = state.face;
})
sadBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'sad', payload: '⊙︿⊙' });
    const state = store.getState();
    heading.innerText = state.face;
})
angryBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'angry', payload: 'ಠ╭╮ಠ' });
    const state = store.getState();
    heading.innerText = state.face;
})
confusedBtn.addEventListener('click', function (e) {
    store.dispatch({ type: 'confused', payload: '⊙.☉' });
    const state = store.getState();
    heading.innerText = state.face;
})

render();