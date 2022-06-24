import { useState } from "react";
import book1 from "../assets/images/book1.png"
import book2 from "../assets/images/book2.jpeg"
import book3 from "../assets/images/book3.jpeg"
import book4 from "../assets/images/book4.jpeg"
import book5 from "../assets/images/book5.jpeg"
import book6 from "../assets/images/book6.jpeg"
import book7 from "../assets/images/book7.jpeg"
import book8 from "../assets/images/book8.jpeg"
import book9 from "../assets/images/book9.jpeg"
import book10 from "../assets/images/book10.jpeg"
import book11 from "../assets/images/book11.jpeg"
import book12 from "../assets/images/book12.jpeg"
import book13 from "../assets/images/book13.jpeg"
import book14 from "../assets/images/book14.jpeg"
import book15 from "../assets/images/book15.jpeg"
import book16 from "../assets/images/book16.jpeg"
import loading from "../assets/icons/loading.png";
import Output from "./Output";


const Browse = ({data}) => {

    const bookImg = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book16];

    const[allData, setAllData] = useState('');

    const [title, setTitle] = useState(false);
    const [byTitle, setbyTitle] = useState('');
    

    const [author, setAuthor] = useState(false);
    const [byAuthor, setbyAuthor] = useState('');

    const [genre, setGenre] = useState(false);
    const [byGenre, setbyGenre] = useState('');

    const [search, setSearch] = useState(false);
    const [bySearch, setbySearch] = useState('');


    const handleFilter = (criteria) =>{

        let datas = [...data];

        switch(criteria){

            case 'title' :     datas = datas.sort((a, b) => a[criteria].localeCompare(b[criteria]));
                               setbyTitle(datas);
                               setTitle(true);
                               setAuthor(false);
                               setGenre(false);
                               break;

            case 'author' :    datas = datas.sort((a, b) => a[criteria].localeCompare(b[criteria]));
                               setbyAuthor(datas);
                               setAuthor(true);
                               setTitle(false);
                               setGenre(false);
                               break;

            case 'all' :       setAllData(data);
                               setAuthor(false);
                               setTitle(false);
                               setGenre(false);
                               setbyAuthor('');
                               setbyTitle('');
                               setbyGenre('');
                               
                               break;

            default :       datas = datas.filter((data) => { return data.genre === criteria });
                            setbyGenre(datas)
                            setAllData('');
                            setAuthor(false);
                            setTitle(false);
                            setGenre(true);
                            setbyAuthor('');
                            setbyTitle('');


        }


    }

    const handleSearch = (query) =>{

        let datas = [...data];

            datas = data.filter((data) =>{

                return data.title.toLowerCase().includes(query.toLowerCase()) || data.author.toLowerCase().includes(query.toLowerCase())
            })

       

        setbySearch(datas);
        setSearch(true)
        setAllData('');
        setAuthor(false);
        setTitle(false);
        setGenre(false);
        setbyAuthor('');
        setbyTitle('');
        setbyGenre('');


    }



    return ( 

        <section id="browse">

            <div className="container-xxl" id="browse-container">

                <h2 className="my-3">BROWSE</h2>

                <div className="bottom-line"></div>

                <div className="input">
                    

                <input type="text" id="search" className="form-control" placeholder="Search title or author"
                onChange={(e) => (handleSearch(e.target.value))}/> 

                </div>

                <div className="mt-3" id="search-books">

                    {data && <div id="filters">


                        <button id="all" onClick={(e) => handleFilter(e.target.id)}>ALL</button>
                        <button id="title" onClick={(e) => handleFilter(e.target.id)}>TITLE</button>
                        <button id="author" onClick={(e) => handleFilter(e.target.id)}>AUTHOR</button>

                        <select name="genre" id="genre" onChange={(e) => {handleFilter(e.target.value)}}>

                            <option value="all">GENRE</option>
                            <option value="mystery">MYSTERY</option>
                            <option value="thriller">THRILLER</option>
                            <option value="non fiction">NON-FICTION</option>
                            <option value="fiction">FICTION</option>
                            <option value="sci-fi">SCIENCE FICTION</option>
                            <option value="humor">HUMOR</option>


                        </select>


                    </div>}

                    <div className="books-container mt-4">
                    
                    {!data &&  <div id="loading">
                        <img src={loading} alt="loading" /></div>}
                    {data && !allData &&  !title && !author && !genre && !bySearch &&  <Output data={data} bookImg={bookImg} />}
                    {data && allData && !title && !author && !genre && !bySearch && <Output data={allData} bookImg={bookImg} />}
                    {data && title && !author && !genre && !bySearch && <Output data={byTitle} bookImg={bookImg} />}
                    {data && !title && author && !genre && !bySearch &&  <Output data={byAuthor} bookImg={bookImg} />}
                    {data &&  !title && !author && genre && !bySearch &&  <Output data={byGenre} bookImg={bookImg} />}
                    {data &&  !title && !author && !genre  && search && <Output data={bySearch} bookImg={bookImg} />}




                        

                    </div>
                </div>

            </div>


        </section>
     );
}
 
export default Browse;