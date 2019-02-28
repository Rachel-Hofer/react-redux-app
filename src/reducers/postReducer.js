
export default (state = [], action) => {
    if(action.type === 'FETCH_POSTS') {
        return action.payload
    }
    return state;

};


//same things as above code. switch statements are more common in reducers

// export default (state = [], action) => {
    
//     switch(action.type) {
//         case 'FETCH_POSTS':
//             return action.payload;
//         default: 
//         return state;
//     }
// };

