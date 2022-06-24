//class based component 

const Ninjas = ({ninjas, deleteNinja}) =>{

    

        return(

            <div className="ninjaList">

            { ninjas.map(ninja =>{

                return (
                <div className="ninja" key={ninja.id}>

                    
                <div>Name: {ninja.name}</div>
                <div>Age : {ninja.age}</div>
                <div>Belt : {ninja.belt}</div>
                <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
                
                </div>


            )})
            }

            </div>
        
        )
    }


export default Ninjas;
