import React , {useState} from 'react'

export default function Textform(props) {
    const handleupclick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Text changed to uppercase","Success");
    }
    const handleonchange = (event)=>{
        setText(event.target.value);
    }
    const handleloclick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Text changed to lowercase","Success");
    }
    const handledownclick = ()=>{
        setText('');
        props.showalert("Text cleared","Success");
    }
    const [text,setText]=useState('')
  return (
    <>
    <div className='container' style={{ color: props.mode==='light' ? 'black' :'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10" style={{backgroundColor:props.mode==='light' ? '#6a6767' :'white',color:props.mode==='dark' ? '#6a6767' :'white'}}></textarea>
       </div>
       <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleupclick}>Convert to uppercase</button>
       <button disabled={text.length === 0}className='btn btn-primary mx-2' onClick={handleloclick}>Convert to lowercase</button>
       <button disabled={text.length === 0}className='btn btn-primary mx-2' onClick={handledownclick}>Clear text</button>
    </div>
    <div className='container' style={{ color: props.mode==='light' ? 'black' :'white'}}>
        <h1>text analysis</h1>
        <p>Your text contains {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
    </div>
    </>
  )
}
