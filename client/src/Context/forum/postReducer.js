/*eslint-disable*/
import {
    GET_POSTS,
    ADD_POST,
    GET_COMMENTS,
    ADD_COMMENT,
    COMMENT_ERROR,
    DELETE_POST,
    EDIT_POST,
    POST_ERROR,
    DELETE_COMMENT,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            };
        case ADD_POST:
             return {
              ...state,
              posts: [action.payload, ...state.posts],
              loading: false
            };
        case EDIT_POST:
            return {
                  ...state,
                  posts: state.posts.map(post =>
                    post._id === action.payload._id ? action.payload : post
                  ),
                  loading: false
            };
        case DELETE_POST:
            return{
                    ...state,
                    posts: state.posts.filter(post=>
                    post._id!==action.payload),
                    loading:false
            };

        case GET_COMMENTS:
            return{
                ...state,
                comments: action.payload,
                loading: false
            };

        case ADD_COMMENT:
          return{
              ...state,
              comments:[action.payload,...state.comments],
              loading:false
          };

        case DELETE_COMMENT:
            return{
                ...state,
                comments: state.comments.filter(comment=>
                comment._id!==action.payload),
                loading:false
            };
        
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
            
        case COMMENT_ERROR:    
        case POST_ERROR:
            return {
                ...state,
                error: action.payload
            };

    }

}