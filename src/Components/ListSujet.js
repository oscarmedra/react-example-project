class ListSujet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }


    componentDidMount() {
        fetch("./data.json")
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                this.setState({
                isLoaded: true,
                items: result
                });
                console.log(this.state.items);
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
                this.setState({
                isLoaded: true,
                error
            });
        });
    }


    deleteSujet = (sujet)=>{
        const items = this.state.items.map(item => item.id !== sujet.id)
        this.setState({items : items});
    }

    close(){
        [document.querySelector('.content')].forEach(element =>{
            element.addEventListener('click', ()=>{
                console.log(this.state);
            })
        })
    }

      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
            return (
                <div className='container mt-4'>
                    <table className='table table-striped table-bordered table-center'>
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>name</th>
                                <th>type</th>
                                <th>matiere</th>
                                <th>display</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map((item, index)=>{
                                return(
                                    <tr key={item.id}>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.matiere}</td>
                                        <td><Sujet sujet={item} key={item.id} number={index + 1}/></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
      }
}