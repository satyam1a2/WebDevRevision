import React from 'react';

class Counter extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        };
    }

 
    
    render(){

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
