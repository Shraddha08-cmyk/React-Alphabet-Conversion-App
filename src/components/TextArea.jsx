import {useState} from 'react'

function Textarea(props) {
    
    const handleUpClick = () => {
        console.log("Onclick Fired");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Onclick Fired");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');


    return(
        <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn-primary" onClick={handleUpClick}>Convert To Uppercase</button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn-secondary" onClick={handleLoClick}>Convert To Lowercase</button>
        </>
    )
}
export default Textarea;