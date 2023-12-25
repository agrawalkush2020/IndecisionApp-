class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:props.count
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
    }
    
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        })
    }
    handleReset(){
        this.setState((prevState)=>{
            return {
                count:0
            }
        })
    }
    
    render(){
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps={
    count:0
}

ReactDOM.render(<Counter />,document.querySelector("#app"));


// let count=0;
// const addone=()=>{
//     count++;
//     rendercounterapp();
// }
// const minusone=()=>{
//     count--;
//     rendercounterapp();
// }
// const reset=()=>{
//     count=0;
//     rendercounterapp();
// }


// const approot = document.getElementById('app');

// const rendercounterapp=()=>{
//     const templatetwo=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addone}>+1</button>
//             <button onClick={minusone}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templatetwo, approot);
// }

// rendercounterapp();
