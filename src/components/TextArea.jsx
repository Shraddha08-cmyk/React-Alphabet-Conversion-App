import { useState } from 'react'
import '../components/TextArea.css'

function Textarea(props) {

    const handleUpClick = () => {
        // console.log("Onclick Fired");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Onclick Fired");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');


    return (
        <>
            <div className="cont">
                <h1 style={{marginLeft: "150px", color: "white", fontFamily: "Comic Sans MS"}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{fontFamily: "Comic Sans MS"}} className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button style={{marginLeft: "30px"}} className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button> &nbsp; &nbsp; &nbsp;
                <button style={{marginLeft: "30px"}} className="btn btn-primary" onClick={handleLoClick}>Convert To Lowercase</button> &nbsp; &nbsp; &nbsp;
                <button style={{marginLeft: "30px"}} className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
export default Textarea;