import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('')
    const handlerOnChange=(event)=>{
        setText(event.target.value)
    }
    const handlerUpClick=()=>{
        setText(text.toUpperCase())
    }
    const handlerLoClick=()=>{
        setText(text.toLowerCase())
    }
    const clearOnClick=()=>{
        setText("")
    }
    let noOfWords=(text.length!==0)?text.split(" ").length:0
    return (
      <>
        <h1 className='py-3'>{props.heading}</h1>
        <div className="mb-3 ">
            <textarea className="form-control" value={text}  onChange={handlerOnChange} id="myBox" rows="8"></textarea>
            <div className="flex">
            <button className="btn btn-primary my-3 mx-2" onClick={handlerUpClick}>Convet To UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handlerLoClick}>Convet To LowerCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={clearOnClick}>Clear</button>
            </div>
        </div>
        <div className="container-fluid py-3">
            <h2>Your Text Summery</h2>
            <p>{noOfWords} word and {text.length} characters</p>
            <p>{noOfWords*0.008} Minites to Read The Whole Sentence</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}
