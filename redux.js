const INITIAL = { face: 'ಠ_ಠ' };

const faceReducer = (state = INITIAL, action) => {
    switch (action.type) {
        default:
            return { ...state, face: action.payload };
    }
}

const store = Redux.createStore(faceReducer);