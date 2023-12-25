class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);

        this.state={
            options:[]
        }
    }

    componentDidMount(){
        try {
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({Options}));
            }
        } catch (error) {
            // do nothing, just a default options array    
        }
    }

    componentDidUpdate(prevProps, prevState){   //jb state mein kuch change ho tb
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return option!==optionToRemove;
            })
        }))
    }

    handlePick(){
        const randNum=Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item !"
        }
        else if(this.state.options.indexOf(option)>-1){
            return "This option already exists !"
        }

        this.setState((prevState)=>({
            options:prevState.options.concat([option])
        }));
    }

    render(){
        const title="Indecision-App";   //aise variable banaakr paas krnege
        const subtitle="Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />   // aise paas krte hain props ko 
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length>0}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>   
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps={
    title:"Indecision_App"
}

const Action=(props)=>{
    return (
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>
            what should i do?
        </button>
        </div>
    )
}

const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        {props.options.length===0 && <p>Please add an option to get started !!</p>}
        {
            props.options.map((option)=>(
                <Option 
                    key={option} 
                    optiontext={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        </div>
    )
}

const Option=(props)=>{
    return (
        <div>
            {props.optiontext}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optiontext)
                }}
            >
                remove
            </button>
        </div>
    )
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }

    handleAddOption(evt){
        evt.preventDefault();

        const option=evt.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        
        this.setState((props)=>({error}));

        if(!error){   // isse kuch bhi add krne ke baad input form empty ho jayega
            evt.target.elements.option.value="";
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
 
ReactDOM.render(<IndecisionApp />,document.querySelector("#app"));