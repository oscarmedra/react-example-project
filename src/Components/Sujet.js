const Question = ({question, number})=>{
    return(
        <li>{number + " : " + question.infos}</li>
    )
}

const Exercice = ({exercice, number})=>{
    return(
        <div className='row'>
            <div className=''>
                {
                   "exo " + number + exercice.libelle
                }

                {
                    exercice.questions.map((question , index)=> <Question key={index} question={question} number={index + 1}/>)
                }
            </div>
        </div>
    )
}


const sujetStyles = {
    position : 'absolute',
    boxShadow : "1px 1px 1px black",
    backgroundColor : 'green',
}

class  Sujet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sujet : props.sujet,
            fade : props.fade,
        }

        this.display = this.display.bind(this);
        this.close = this.close.bind(this);
    }

    display(){
        this.setState({fade : true});
    }
    close(){
        this.setState({fade : false});
    }
    render(){
        return(
            <React.Fragment>
                <button className='btn btn-primary' onClick={this.display}>afficher</button>
                {
                    this.state.fade == true ? 
                    <div className='content' style={
                        {
                            position : 'absolute',
                            left : 0,
                            top : 0,
                            backgroundColor : "rgba(0, 0, 0, 0.1)",
                            color : 'green',
                            width: '100vw',
                            height : '100vh',
                            overflow : 'hidden',
                            zindex : '9',
                            backdropFilter : 'blur(px)'
                        }
                    }
                >
                    <div className='container'>
                        <div className='row'>
                            <div className=' offset-2 col-8 offset-2'>
                                <div className='card' styles={sujetStyles}>
                                    <div className='card-body'>
                                        <div className='border rounded text-center'> {this.state.sujet.name}</div>
                                        {
                                            this.state.sujet.exercices.map((exercice, index)=><Exercice key={exercice.id} exercice={exercice} number={index + 1} />)
                                        }
                                    </div>
                                    <button className='btn btn-sm btn-primary align-left' onClick={this.close}>close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    :null
                }
            </React.Fragment>
        )
    }
}