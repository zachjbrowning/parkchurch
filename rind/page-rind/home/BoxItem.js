import React from 'react'
import {Link} from 'react-router-dom'
import './box.css'

export default function BoxItem(props) {
    return (
        <div className="boxItem">
            <div className="boxInner">
                <div className="boxIcon">
                    {
                        ('img' in props.box ? <img src={'/public/' + props.box.img}/> : <img src={'/public/pc_logo.svg'}/>)
                    }
                </div>
                <div className="boxTitle">
                    <strong>{props.box.name}</strong>
                </div>
                <div className="boxText">
                    {props.box.text}

                </div>
                <div className="boxLinkBox">
                    <Link className="boxLink" to={'pathname' in props.box ? props.box.pathname : '#'}>
                        &nbsp;Read more..&nbsp;
                    </Link>
                </div>


            </div>

        </div>
    )
}
