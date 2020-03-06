/*eslint-disable*/
import React,{useEffect,useContext} from 'react'
import {Link} from 'react-router-dom';
import PostContext from '../../Context/forum/postContext';
import Spinner from '../Layout/Spinner';


const Forum = () => {
    const postContext=useContext(PostContext);
    const {posts,getPosts,loading} = postContext;
    useEffect(()=>{
        getPosts();
    },[]);
    if(loading){
        return(<Spinner />)
    }
    else{
    return (
        <div>
            <div className="site-section pt-0">
            <div className="container">
                <br/>
                <h1>FORUM<Link to='/forum/create' style={{float: "right"}}><button type="button" class="btn btn-elegant">Create Post</button></Link></h1>
                <p>The first principle of a free society is an untrammeled flow of words in an open forum.....</p>
                <br/>
                <h4>Posts:</h4>
                <div className="row">
                {posts.map(post => (
                <div className="mb-5 col-md-6">
                    <div class="card rounded mb-0">
                    <div class="view overlay">
                        <img class="card-img-top" src={post.img} objectFit="cover" width="100px" height="400px" alt="Card image cap"/>
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body elegant-color white-text rounded-bottom">
                        <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                        <h4 class="card-title"> {post.title} </h4>
                        <hr class="hr-light"/>
                        <p class="card-text white-text mb-4"> {post.subject} </p>
                        <Link to={`/forum/${post._id}`} class="white-text d-flex justify-content-end"><h5>Read more <i class="fas fa-angle-double-right"></i></h5></Link>
                    </div>
                    </div>
                 </div>   
                ))}
                </div>
            </div>
            </div>
        </div>
    )
}
}

export default Forum