import {useState} from 'react'

function Textarea(props) {
    
    const handleUpClick = () => {
        console.log("Onclick Fired");
        setText("You have to click handleUpChange");
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
        <button className="btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        </>
    )
}
export default Textarea;