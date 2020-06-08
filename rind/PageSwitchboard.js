import React from 'react'
import {Route} from 'react-router-dom'
import Home from './page-rind/home/Home'
/*
To add new pages:
- import your new Component above
- include extra <Route key='SOMETHING' exact path='/path/i/want/to/catch' render={() => <Component/>} as another element in the array below
- done!
*/
export default function PageSwitchboard() {
    return [
        <Route key='home' exact path='/' component={Home}/>
    ]
}
