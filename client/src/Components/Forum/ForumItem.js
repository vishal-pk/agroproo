/*eslint-disable*/
import React,{useContext,Fragment,useEffect,useState} from 'react'
import PostContext from '../../Context/forum/postContext';
import AuthContext from '../../Context/auth/authContext';
import Spinner from '../Layout/Spinner';
import Moment from 'react-moment';




const ForumItem = (props) => {
    const postContext = useContext(PostContext);
    const authContext=useContext(AuthContext);
    const { user }=authContext;
    const {posts,getComment,loading,getPosts,comments,setCurrent,addComment,deleteComment,deletePost,editPost}=postContext;
    const id=props.match.params.id; 
    useEffect(()=>{
        getPosts();
        getComment(id);
        
    },[]);
    const [comment, setComment] = useState({
        text: ''
      });
      const { text } = comment;

    const onChange = e =>
        setComment({ [e.target.name]: e.target.value});

    const onSubmit=(e)=>{
          e.preventDefault();
          addComment(comment,id);
          setComment({text:''});

    }
    const onDelete= e =>{
        deletePost(id);
        props.history.push('/forum');
    }
    const authLinks = (post)=>(
        <Fragment>
            <div className="card my-4">
                <h5 className="card-header">Post Options</h5>
                <div className="card-body">
                    <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>Delete</button>
                    <button type="button" onClick={() =>{ 
                        editPost(post);
                        setCurrent(post);
                        props.history.push('/forum/create') }} className="btn btn-sm btn-outline-warning">Edit</button>
                </div>
            </div>
         </Fragment>
     );
    const commentLinks = (comment) =>(
        <button className="btn btn-sm btn-outline-danger" style={{float : 'right'}} onClick={ () => deleteComment(comment._id)}>Delete</button>
    );       

    const dateToFormat = '1976-04-19T12:59-0500';
    const date='2020-01-18T14:35:26.392Z';

// if(loading) return <Spinner />; 
// else{  
    return (
        <div>
            { 
            posts.map(post => (post._id===id) && (
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <h1 className="mt-4">{post.title}</h1>
                    <p className="lead">
                    by {post.userName}
                    <a href="#">  </a>
                    </p>
                    <hr></hr>
                    <p>Posted <Moment fromNow date={post.date} /></p>
                    <hr></hr>
                    <img className="rounded" src={post.img} height="25%" width="90%" objectFit="cover"  alt="Post Image"></img>
                    <hr></hr>
                    <h4>Description:</h4>
                    <p className="lead">{post.desc}</p>
                    <hr></hr>
                    <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <textarea className="form-control" rows="3" name="text" onChange={onChange} value={text}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                    {comments.map(comment => (
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://cdn.onlinewebfonts.com/svg/img_568657.png" width="50px" height="50px" alt=""></img>
                    <div className="media-body">
                        <h5 className="mt-0"> {comment.userName} </h5>
                        {user && user._id === comment.user && commentLinks(comment)}
                        {comment.text}
                    </div>
                    </div>
                    ))}
                </div>
                 <div className="col-md-4">
                   {user && user._id === post.user && authLinks(post) }
                </div>
                </div>
                </div>
            ))}
        </div>
    )
    // }
}

export default ForumItem;
