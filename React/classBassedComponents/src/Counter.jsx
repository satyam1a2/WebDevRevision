import React from 'react';

class Counter extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        };
        console.log("Constructor called");
    }

    componentDidMount(){  // useEffect, [] (empty array)
        console.log("Component did mount called");
        // API call can be made here
        this.setState({ count: this.state.count+1 }); // Example of setting initial state after mount
    }

    componentDidUpdate(){  // useEffet, __(No array)
        console.log("Component did update called");
        // This method is called after every update
        // You can perform actions based on state changes here
    }

    componentWillUnmount(){  // Cleanup function in useEffect
        console.log("Component will unmount called");
        // This method is called before the component is removed from the DOM
        // Cleanup actions can be performed here
    }

 
    
    render(){

        console.log("Render called");
        return (
            <>
            <div>
               <button onClick={ ()=> this.setState({ count: this.state.count + 1 })}  > Increament </button>

               <span> {this.state.count} </span>

               <button onClick={ ()=> this.setState({ count: this.state.count - 1 })} > Decreament </button>
            </div>
            </>
        ); 

    }

}

export default Counter;
