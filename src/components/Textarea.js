import React, { useState } from 'react'

export default function Textarea(props) {

    const handleUpClick = () => {
        // console.log("Upper Button Cliced");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handlelowClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to lowercase", "success")

    }

    const handleOnChange = (event) => {
        // console.log("Handle on Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter something');
    // setText("HEy");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}> Convet to UpperCase </button>
                <button className='btn btn-dark mx-3' onClick={handlelowClick}>Conver into LoweCase</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary : </h3>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> character in above box</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
                <h2>Preview</h2>
                <p className='container'>{text}</p>
            </div>
        </>
    )
}
