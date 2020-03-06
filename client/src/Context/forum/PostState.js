/*eslint-disable*/
import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer'; 

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

const PostState = props => {
    const initialState = {
        posts: [{}],
        error: [{}],
        comments:[{}],
        current: null,
        loading:true,
        
    };
    const [state, dispatch] = useReducer(postReducer, initialState);

    // GET Posts Method
    const getPosts = async () => {
        try {
          const res = await axios.get('https://floating-chamber-63070.herokuapp.com/api/forum');
          dispatch({
            type: GET_POSTS,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: POST_ERROR,
            payload: err.response.msg
          });
        }
      };

      // ADD Post Method

      const addPost = async post => {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        console.log(post);
        try {
          const res = await axios.post('https://floating-chamber-63070.herokuapp.com/api/forum', post, config);
    
          dispatch({
            type: ADD_POST,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: POST_ERROR,
            payload: err.response.msg
          });
        }
      };

      // EDIT Post MEthod

      const editPost = async post => {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        try {
          const res = await axios.put(
            `https://floating-chamber-63070.herokuapp.com/api/forum/${post._id}`,
            post,
            config
          );
    
          dispatch({
            type: EDIT_POST,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: POST_ERROR,
            payload: err.response.msg
          });
        }
      };

      // DELETE Post Method
      const deletePost=async (id)=>{
        try{
        await axios.delete(`https://floating-chamber-63070.herokuapp.com/api/forum/${id}`);
          dispatch({type:DELETE_POST,payload:id});
        }
        catch(err)
          {
            console.log(err);
          }
        };

        // GET Comments Method

        const getComment= async id =>{
          const res=await axios.get(`https://floating-chamber-63070.herokuapp.com/api/forum/${id}/comments`);
          dispatch({
            type:GET_COMMENTS,
            payload:res.data
          });
        }
        // ADD Comment Method
        const addComment=async (comment,id)=>{
            const config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            try{
              const res = await axios.post(`https://floating-chamber-63070.herokuapp.com/api/forum/${id}/comments`, comment, config);
              dispatch({
                type:ADD_COMMENT,
                payload:res.data
              })
            }catch(err)
            {
              dispatch({
                type: COMMENT_ERROR,
                payload: err.response.msg
              });
    
            }
        };

        // DELETE Comment Method
        const deleteComment=async (id) =>{
          try{
          await axios.delete(`https://floating-chamber-63070.herokuapp.com/api/forum/comments/${id}`);
            dispatch({type:DELETE_COMMENT,payload:id});
          }
          catch(err)
            {
              console.log(err);
            }
          };

        // SET Current Method
        const setCurrent = post => {
          dispatch({ type: SET_CURRENT, payload: post });
        };

        // CLEAR Current Method
        const clearCurrent = () => {
          dispatch({ type: CLEAR_CURRENT });
        };

    //   RETURN PROVIDERS
    return(
        <PostContext.Provider
            value={{
                error: state.error,
                posts:state.posts,
                loading: state.loading,
                comments: state.comments,
                current: state.current,
                getPosts,
                addPost,
                deletePost,
                editPost,
                getComment,
                addComment,
                deleteComment,
                setCurrent,
                clearCurrent
            }}
        >{props.children}</PostContext.Provider>
    );
}

export default PostState;