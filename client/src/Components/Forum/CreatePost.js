/* eslint-disable */
import React, {useContext,useState,useEffect} from 'react'
import PostContext from '../../Context/forum/postContext';

const CreatePost = (props) => {

    const postContext = useContext(PostContext);
    const { addPost, editPost, current, clearCurrent} = postContext;

    useEffect(() => {
        console.log(current);
        if (current !== null) {
          setPost(current);
        } else {
          setPost({
            title: '',
            desc: '',
            subject: '',
            img:''
          });
        }
      }, [postContext, current]);
      
    const [post, setPost] = useState({
        title: '',
        desc: '',
        subject: '',
        img:''
      });
      const { title, desc, subject, img } = post;

      const onChange = e =>
        setPost({ ...post, [e.target.name]: e.target.value});

      const onSubmit=(e)=>{
          e.preventDefault();
          if (current === null) {
            console.log(post);
            addPost(post);
            props.history.push(`/forum`);
          } else {
            editPost(post);
            props.history.push(`/forum/${current._id}`);
          }
          clearAll();
        };
        const clearAll = () => {
            clearCurrent();
        }

      const ImageChange = async e => {
          setPost({...post,img: await toBase64(e.target.files[0])});
      }
      const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });

    return (
        <div>
            <div class="site-section pb-0 site-portfolio">
            <div class="container">

                <div class="row mb-5 align-items-end">
                <div class="col-md-6" data-aos="fade-up">
                    <h2>Create Post</h2>
                </div>
                </div>
                <div class="row">
                <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                    <form onSubmit={onSubmit}>
                    <div class="row">
                        <div class="col-md-12 form-group">
                        <label for="name">Title</label>
                        <input type="text" name="title" class="form-control" id="name" data-rule="required" data-msg="Please provide a Title" required onChange = {onChange} value={title} />
                        <div class="validate"></div>
                        </div>
                        <div class="col-md-12 form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" name="subject" id="subject" data-rule="required" data-msg="Please provide a Subject" required onChange = {onChange} value={subject} />
                        <div class="validate"></div>
                        </div>
                        <div class="col-md-12 form-group">
                        <label for="name">Description</label>
                        <textarea class="form-control" name="desc" cols="30" rows="10" data-rule="required" data-msg="Please provide a Description" required onChange={onChange} value={desc}></textarea>
                        <div class="validate"></div>
                        </div>
                        <div class="col-md-12 input-group mb-5">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Image</span>
                          </div>
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01" onChange={ImageChange} />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                          </div>
                        </div>
                        <div class="col-md-6 form-group">
                        <input type="submit" class="readmore d-block w-100" value="Create Post" />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CreatePost
