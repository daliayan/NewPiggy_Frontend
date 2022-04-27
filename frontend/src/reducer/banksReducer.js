const banksReducer = (state = {banks: []}, action) => {
    switch(action.type){
        case 'GOT_BANKS': 
            return {...state, banks: action.payload}
        case 'ADD_BANKS':
            return { ...state, banks: [...state.banks, action.payload]
        }
        case 'DELETE_BANKS':
            const deletingBank = state.banks.filter(
                index => action.payload.id !== index.id
            );
            return deletingBank()
        default:
            return state;
    }
}

export default banksReducer;