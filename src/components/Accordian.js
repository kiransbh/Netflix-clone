import React from 'react'
import '../index.css'
import AddIcon from '@material-ui/icons/Add'

function Accordian({ title, detials, active, setActive }){
    return(

            <div className='accordian'>
                <div className='accordianHeading'>
                    <div className='container' onClick={() => setActive(title)}>
                        <p>{ title }</p>
                        <span><AddIcon /></span>
                    </div>
                </div>

                <div className={(active === title ? "show" : "") + "accordianContent"}>
                    <div className='container'>
                        <p>{ detials }</p>
                    </div>
                </div>
            </div>
    )          
}

export default Accordian