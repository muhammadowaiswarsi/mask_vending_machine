import React, {useState} from 'react'
import machinePic from '../../assets/machine.jpeg'
import './navbar.css'

export default function Navbar() {
    const [active, setactive] = useState("machine")
    return(
        <div className="navbar">
            <div className="machine">
                <div onClick={()=>setactive("machine")} className={active === "machine" ? "active": ""}>
                    <img src={machinePic} alt="" />
                </div>
                <p className="machine-name">machines</p>
            </div>
            <div className="money">
                <div onClick={()=>setactive("money")} className={active === "money" ? "active": ""}>
                    <p className="money-symbol">$</p>
                </div>
                <p>money</p>
            </div>
        </div>
    )
}