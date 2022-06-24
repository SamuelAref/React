const Output = ({data,bookImg}) => {


    return ( 

        <div className="row d-flex justify-content-center align-items-center">
                            
        {data && data.map((book) => (

            <div className="col-xl-3 col-lg-4 col-sm-5 col-xs-6 book" key={book.id}>

                    <div className="bookContainer">

                        <img src={bookImg[book.id-1]} alt="book cover" />

                    </div>

                    <h6 className="title">{book.title}</h6>
                    <h6 className="lead author">{book.author}</h6>

                    <button className="details" type="button" data-bs-toggle="offcanvas" data-bs-target={`#canvas${book.id}`} aria-controls="offcanvasBottom" key={book.id}>View Details</button>

                        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id={`canvas${book.id}`} aria-labelledby="offcanvasBottomLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBottomLabel">{book.title}</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            
                        <div className="bookContainer">

                            <img src={bookImg[book.id-1]} alt="book cover" />
                    <h6 className="author mt-3">{book.author}</h6>


                        </div>
                        

                        <p className="bookDescription">{book.description}</p>
                        </div>
                        </div>

                    

                    
            </div>


        ))

      

        }
                        </div>


     );
}
 
export default Output;