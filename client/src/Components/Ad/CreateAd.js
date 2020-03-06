/* eslint-disable */
import React, {useContext,useState,useEffect} from 'react'
import AddContext from '../../Context/adds/addContext';

const CreateAdd = (props) => {

    const addContext = useContext(AddContext);
    const { postAdd, updateAdd, current, clearCurrent} = addContext;

    useEffect(() => {
        console.log(current);
        if (current !== null) {
          setAdd(current);
        } else {
          setAdd({
            title: '',
            desc: '',
            price: '',
            img:'',
            number:'',
            location:''
          });
        }
      }, [addContext, current]);
      
    const [add, setAdd] = useState({
        title: '',
        desc: '',
        price: '',
        number:'',
        location:''
      });
      const { title, desc, price, number, location } = add;

      const onChange = e =>
        setAdd({ ...add, [e.target.name]: e.target.value});

      const onSubmit=(e)=>{
          e.preventDefault();
          if (current === null) {
            postAdd(add);
            props.history.push(`/ads`);
          } else {
            updateAdd(add);
            props.history.push(`/ads/${current._id}`);
          }
          clearAll();
        };
      const clearAll = () => {
            clearCurrent();
        }
      const ImageChange = async e => {
          setAdd({...add,img: await toBase64(e.target.files[0])});
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
                    <h2>Create Ad</h2>
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
                        <label for="subject">Price /Kg</label>
                        <input type="number" class="form-control" name="price" id="price" data-rule="required" data-msg="Please provide a Price" required onChange = {onChange} value={price} />
                        <div class="validate"></div>
                        </div>
                        <div class="col-md-12 form-group">
                        <label for="number">Phone</label>
                        <input type="tel" class="form-control" name="number" id="number"  onChange = {onChange} value={number} />
                        <div class="validate"></div>
                        </div>
                        <div class="col-md-12 form-group">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" name="location" id="location"  onChange = {onChange} value={location} />
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
                        <input type="submit" class="readmore d-block w-100" value="Create Ad" />
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

export default CreateAdd
