import React, { Component } from 'react'

export class LifecyclesCDMChild extends Component {
    
    constructor(props) {
        console.log('Child Constrctor Called')
        super(props)
    
        this.state = {
            data: 'Child Loading...',
        }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child Data fetched!')
            this.setState({
                data: 'Child Loaded!'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Child Component mounted')
        this.getData();
    }

    render() {
        console.log('Child render method called')
        return (
        <div>
            <h1>{this.state.data}</h1>
        </div>
        )
    }
}

export default LifecyclesCDMChild