import React from 'react'

export default function Aboutus(props) {
  let mystyle ={
     color:props.mode ==='dark' ? 'white' : '#090c1f',
     backgroundColor:props.mode ==='dark' ? '#090c1f' :'white'
  }

  return (
    <div className='container' style={mystyle}>
      <h1 style={mystyle}>About This Website</h1>
      <div className="accordion" id="accordionExample" style={mystyle} >
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle} >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        Description
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body"  >
        <strong>This website helps you to change and analyze your text as you wish.</strong>.For any technical support please mail us at abc123@gmail.com.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        Developers
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={{mystyle}} >
      <div className="accordion-body" >
        <b>DHRUV GARG</b>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
