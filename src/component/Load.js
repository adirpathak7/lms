import React, { Component } from 'react';

export default class Load extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1.0,
            reducer: 0.1,
            intervalId: null // Store interval id in state to clear it later
        };
    }

    componentDidMount() {
        const { reducer } = this.state;
        const intervalId = setInterval(() => {
            this.updateOpacity(reducer);
        }, 1000);
        this.setState({ intervalId }); // Store interval id in state
    }

    componentWillUnmount() {
        const { intervalId } = this.state;
        clearInterval(intervalId); // Clear interval when component unmounts
    }

    updateOpacity = (reducer) => {
        const { opacity } = this.state;
        const updatedOpacity = opacity - reducer;
        if (updatedOpacity > 0) {
            document.getElementById('spin')?.style.setProperty('opacity', updatedOpacity);
            this.setState({ opacity: updatedOpacity });
        } else {
            document.getElementById('spin')?.style.setProperty('display', 'none');
            clearInterval(this.state.intervalId); // Clear interval when opacity reaches 0
        }
    }

    render() {
        return (
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className="bg-black h-24 w-24 rounded-full animate-bounce" id='spin'>
                </div>
            </div>
        );
    }
}
