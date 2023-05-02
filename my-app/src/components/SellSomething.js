import React from 'react'
import './SellSomething.css'
import { Link } from "react-router-dom";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function SellSomething() {
    return (
        <form className='sell'>
            <Link className='signin-logo' to={'/'}><img src="img/amazon-logo-black.png" alt="" /></Link>
            <h1>Post Your Add</h1>
            <div className="add">
                <h2>INCLUDE SOME DETAILS</h2>

                <label htmlFor="name">Ad title</label>
                <input id="title" name="title" spellCheck="false" maxLength="70" />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" spellCheck="false" maxLength="4096" autoComplete="nope"></textarea>
                <hr />

                <h2>SET A PRICE</h2>
                <label htmlFor="price">Price</label>
                <div className='input-container'>
                    <span>Rs  |</span>
                    <input id="price" name="price" spellCheck="false" autoComplete="nope" type="number" />
                </div>
                <hr />

                <h2>UPLOAD UPTO 5 PHOTOS</h2>
                <label htmlFor="file1" className='file'><AddAPhotoOutlinedIcon /></label>
                <input onChange={() => { console.log('I was changed') }} type="file" accept='image/*' id='file1' />

                <label htmlFor="file2" className='file'><AddAPhotoOutlinedIcon /></label>
                <input type="file" accept='image/*' id='file2' />

                <label htmlFor="file3" className='file'><AddAPhotoOutlinedIcon /></label>
                <input type="file" accept='image/*' id='file3' />

                <label htmlFor="file4" className='file'><AddAPhotoOutlinedIcon /></label>
                <input type="file" accept='image/*' id='file4' />

                <label htmlFor="file5" className='file'><AddAPhotoOutlinedIcon /></label>
                <input type="file" accept='image/*' id='file5' />
                <br />
                <hr />
                <br />
                
                <button type='submit' className='post'>Post now</button>
                <br />
                <br />

                <label htmlFor="category">Category of the Item you are trying to sell: </label>
                <input type="text" />
            </div>
            <div style={{ background: '#37475a', color: 'white' }} className="footer">
                This is an amazon Clone made just for Practice and Fun Purposes!
            </div>

        </form>
    )

}
