import React, { Component } from 'react';

class SafeComponent extends Component {
    constructor(props: any){
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: boolean){
        return {hasError: true}
    }

    componentDidCatch() {}

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

export default SafeComponent;