import React from 'react'
import '../index.css'

function Price({ catagory, price, quality, resolution, active, setActive }){
    return(
        <table className='table'>
            <tr onClick={() => setActive(catagory)}>
                <td className={((active === catagory ? "show" : ""))}>{ catagory }</td>
                <td className={((active === catagory ? "show" : ""))}>{ price }</td>
                <td className={((active === catagory ? "show" : ""))}>{ quality }</td>
                <td className={((active === catagory ? "show" : ""))}>{ resolution }</td>
            </tr>
        </table>
    )
}

export default Price