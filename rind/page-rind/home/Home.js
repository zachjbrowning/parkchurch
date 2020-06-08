import React, { Component } from 'react'
import './home.css'
import BoxItem from './BoxItem'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            boxes : {
                links : []
            }

        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0,0)
        document.addEventListener("scroll", () => {
            document.getElementById("big-tree").style.transform = 'translateY(' +  3 * document.documentElement.scrollTop / 5 + 'px)'
        })
        const options = {
            method: 'GET',
        }
        fetch('/zestbox/home/boxes.json', options).then(response => {if (!response.ok) {throw new Error("Couldn't retrieve " + this.props.file + ". Check main.json has the current path to the file!!!")} return response.json()}).then(json => this.setState({boxes: json}))
    }

    render() {
        
        
        return (
            <div>
                <div className="big-tree-box">
                    <div id="big-tree"></div>
                    <div id="big-tree-shadow"></div>
                    <div id="big-tree-content" className="content-container container">
                        It's like, church, in a park
                    </div>
                </div>
                <div className="green-content">
                    <div className="container content-container">
                        Yeah like i said a park in a church
                    </div>
                </div>
                <div className="white-content">
                    <div className="green-fadeout"></div>
                    <div className="container content-container">
                        <div className="boxgrid">
                            {this.state.boxes.links.map((box, index) => (
                                <BoxItem key={index} box={box}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



