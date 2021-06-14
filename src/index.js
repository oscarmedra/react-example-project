function App(){
    return(
        <React.Fragment>
            <ListSujet />
        </React.Fragment>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'));

/*
    list'e de sujet
        => sujet
            => ensemble d'exercices 
                => ensemble de question question 
*/