import React,{useState} from 'react'
export default function TextForm(props) {

    const handleUPClick =() =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText) 
        props.showAlert("Coverted to UpperCase!","success: ")   
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)  
        props.showAlert("Coverted to LowerCase!", "Success: ")   

    }

    const handleClearClick =() =>{
        let newText = '';
        setText(newText)  
        props.showAlert("Text Cleared","success: ")
    }
    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success: ")   


    }
    const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra spaces are removed","success: ")   

    }

    const[text,setText]=useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
            <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark'? '#13466e':'White', color: props.mode === 'dark'? 'white' : '#042743'}}id="MyBox" rows="5"></textarea>
                </div>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleUPClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3"style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

