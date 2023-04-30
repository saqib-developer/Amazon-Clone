import React from 'react'
import './Footer.css'

export default function Footer() {
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <footer>
            <button onClick={toTop}>Back to top</button>
            <div className='sec1'>
                <div className="row" style={{margin: 0}}>
                    <div className="column">
                        <b>Get to Know Us</b>
                        <br />
                        Lorem<br />
                        ipsum<br />
                        dolor<br />
                        sit<br />
                        amet<br />
                        consectetur<br />
                        adipisicing<br />
                        elit<br />
                        corrupti
                    </div>
                    <div className="column">
                        <b>Make Money with Us</b><br />
                        Lorem, ipsum dolor.<br />
                        Lorem, ipsum.<br />
                        Lorem ipsum dolor sit amet.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem.<br />
                        Lorem ipsum dolor sit.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem, ipsum.<br />
                        Lorem ipsum dolor amet consectetur. <br />
                        Lorem ipsum dolor sit <br />
                    </div>
                    <div className="column">
                        <b>Amazon Payment Products</b><br />
                        Lorem, ipsum dolor.<br />
                        Lorem, ipsum.<br />
                        Lorem ipsum dolor sit amet.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem ipsum dolor amet consectetur. <br />
                    </div>
                    <div className="column">
                        <b>Let Us Help You</b><br />
                        Lorem, ipsum dolor.<br />
                        Lorem ipsum dolor sit amet.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem ipsum dolor amet consectetur. <br />
                        Lorem, ipsum dolor.<br />
                        Lorem, ipsum.<br />
                        Lorem ipsum dolor sit amet.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem ipsum dolor sit.<br />
                        Lorem, ipsum dolor.<br />
                        Lorem ipsum dolor amet consectetur. <br />
                        Lorem ipsum dolor sit <br />
                    </div>
                </div>
                <hr />
                <p>This is an amazon Clone made just for Practice and Fun Purposes.</p>
                <a className='top-logo' href="*"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            </div>
            <div className='sec2'>
                <p style={{margin: '0 0 16px 0'}}>This is an amazon Clone made just for Practice and Fun Purposes</p>
                <a className='top-logo' href="*"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            </div>
        </footer>
    )
}
