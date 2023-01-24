import React from 'react'

function Alert(props) {
    // let style={
    //     height:30,
    //     width:30
    // }
    
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong></strong> {props.alert.status}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert
