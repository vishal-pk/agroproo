/*eslint-disable */
import React from 'react'

const Image = () => {
    let image;
    const onChange = async e => {
        image=await toBase64(e.target.files[0]);
        console.log(image);
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    if(image){
        return(<div></div>)
    }
    return (
        <div>
            <input type="file" onChange={onChange}/>
        </div>
    )
}

export default Image
