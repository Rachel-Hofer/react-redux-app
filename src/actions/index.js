import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => {  //action creator
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
};

// *******************************************
// above is the same as below, just less code
// *******************************************

// export const fetchPosts = () => async dispatch => {
//     const response = await jsonPlaceholder.get('.posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response})
// };


export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};

// *******************************************************************
// Below is to only make axios get request when there is a NEW userID. 
// Reduced GET calls from 100 down to 10.
// *******************************************************************

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data });
}); 


