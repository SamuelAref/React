import { useState } from "react";

const AddBook = () => {


    const [title, setTitle] = useState('Title');
    const [author, setAuthor] = useState('Author');
    const [published, setPublished] = useState('');
    const [image, setImage] = useState('images/Default.png');
    const [description, setDescription] = useState('No Description Available');
    const [isRendering, setIsRendering] = useState(false);

    const handleClick = (e) => {

        e.preventDefault();

        const book = { title, author, published, image, description };

        setIsRendering(true);

        fetch('http://localhost:3000/books', {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)

        })

            .then(() => {

                console.log('added');
                setIsRendering(false);
            })
    }

    return (

        <div className="add-container">

            <form onSubmit={handleClick}>

                <div className="title">
                    <label >TITLE</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>


                <div className="author">

                    <label >AUTHOR</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />

                </div>


                <div className="date">

                    <label >Date Published</label>
                    <input type="date" />

                </div>

                <div className="image">

                    <label >Upload Image</label>
                    <input type="file"
                        onChange={(e) => setImage(`images/${e.target.value}`)} />
                </div>



                <div className="text-area">

                    <label >Short Description</label>
                    <textarea></textarea>

                </div>

                {isRendering && <button>ADDING BOOK ...</button>}
                {!isRendering && <button>ADD BOOK</button>}





            </form>



        </div>


    );
}

export default AddBook;