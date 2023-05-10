import React, { useState } from 'react'
import './SellSomething.css'
import { Link } from "react-router-dom";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function SellSomething(props) {
    const [title, setTitle] = useState("")
    const titleCounter = (event) => {
        setTitle(event.target.value)
    }

    const [description, setDescription] = useState("")
    const descriptionCounter = (event) => {
        setDescription(event.target.value)
    }

    const noOfChar = (text) => {
        let noOfChar = text.length;
        return noOfChar
    }
    const [src1, setSrc1] = useState()

    const putImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setSrc1(event.target.result);
        };

        reader.readAsDataURL(file);
    }
    return (
        <form className='sell' onSubmit={props.postAdd}>
            <Link className='signin-logo' to={'/'}><img src="img/amazon-logo-black.png" alt="" /></Link>
            <h1>Post Your Add</h1>
            <div className="add">
                <h2>INCLUDE SOME DETAILS</h2>


                <label htmlFor="name">Ad title</label>
                <input required id="title" name="title" spellCheck="false" minLength={3} maxLength="70" onChange={titleCounter} />
                <p>{noOfChar(title)}/70</p>

                <label htmlFor="description">Description</label>
                <textarea onChange={descriptionCounter} required id="description" name="description" spellCheck="false" minLength={50} maxLength="4000" autoComplete="nope"></textarea>
                <p>{noOfChar(description)}/4000</p>
                <hr />

                <h2>Category</h2>
                <label htmlFor="category">Category of the Item</label>
                <br />
                <select name="" id="category">
                    <option value="electronics">Electronics</option>
                    <option value="">Sports and outdoor</option>
                    <option value="">Toys and games</option>
                    <option value="">Clothing and accessories</option>
                    <option value="">Home and garden</option>
                    <option value="">Health and beauty</option>
                    <option value="">Pet supplies</option>
                    <option value="">Books and media</option>
                </select>
                <br />
                <br />
                <hr />
                <br />
                <h2>SET A PRICE</h2>
                <label htmlFor="price">Price</label>
                <div className='input-container'>
                    <span>Rs  |</span>
                    <input required id="price" name="price" spellCheck="false" autoComplete="nope" type="number" />
                </div>
                <hr />

                <h2>UPLOAD UPTO 5 PHOTOS</h2>
                <label htmlFor="file1" className='file'>
                    {src1 ? <img src={src1} alt="" /> : <AddAPhotoOutlinedIcon />}
                </label>
                <input required onChange={putImage} type="file" accept='image/*' id='file1' />

                <label htmlFor="file2" className='file'><AddAPhotoOutlinedIcon /></label>
                <input required type="file" accept='image/*' id='file2' />

                <label htmlFor="file3" className='file'><AddAPhotoOutlinedIcon /></label>
                <input required type="file" accept='image/*' id='file3' />

                <label htmlFor="file4" className='file'><AddAPhotoOutlinedIcon /></label>
                <input required type="file" accept='image/*' id='file4' />

                <label htmlFor="file5" className='file'><AddAPhotoOutlinedIcon /></label>
                <input required type="file" accept='image/*' id='file5' />
                <br />
                <hr />
                <br />

                <button type='submit' className='post'>Post now</button>
            </div>
            <div style={{ background: '#37475a', color: 'white' }} className="footer">
                This is an amazon Clone made just for Practice and Fun Purposes!
            </div>

        </form>
    )

}
