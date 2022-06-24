import useFetch from "../Hooks/useFetch";
import { useState } from "react";

const Content = ({ data, data2, search }) => {

    // const data = prop.data
    // const data2 = prop.data2
    // console.log(data);
    console.log(data2);
    console.log(search);



    // const { data } = useFetch('http://localhost:8000/Contact')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mob, setMob] = useState('')
    const [tel, setTel] = useState('unspecified')
    const [emailOne, setEmailOne] = useState('unspecified')
    const [emailTwo, setEmailTwo] = useState('unspecified')
    const [addressOne, setAddressOne] = useState('unspecified')
    const [addressTwo, setAddressTwo] = useState('unspecified')



    const handleDelete = (id) => {

        fetch('http://localhost:8000/Contact/' + id, {

            method: 'DELETE'
        })

            .then(() => {

                window.location.reload();
            })
    }

    const handleSubmit = () => {

        const contact = { firstName, lastName, mob, tel, emailOne, emailTwo, addressOne, addressTwo }

        fetch('http://localhost:8000/Contact', {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        })


    }

    const closeModal = () => {

        const formContainer = document.getElementById('add');
        const form = document.getElementById('forms');
        const close = document.getElementById('close');

        formContainer.classList.remove('add');
        form.style.display = "none";
        close.style.display = "none";
    }




    return (

        <div className="content">

            {!data && <h2>Loading ....</h2>}

            {!search && data && data.map((dat) => (

                <div className="contact-container" key={dat.id}>

                    <div className="image">

                        <img src="../images/Default.png" alt="" />


                    </div>

                    <div className="contact-info">

                        <div className="in">

                            <h6>First Name : </h6>
                            <h5>{dat.firstName}</h5>
                        </div>

                        <div className="in">

                            <h6>Last Name : </h6>
                            <h5>{dat.lastName}</h5>
                        </div>

                        <div className="in">

                            <h6>Mob : </h6>
                            <h5>{dat.mob}</h5>
                        </div>

                        <div className="in">

                            <h6>Tel : </h6>
                            <h5>{dat.tel}</h5>
                        </div>

                        <div className="in">

                            <h6>Email: </h6>
                            <h6>{dat.emailOne}</h6>
                        </div>

                        <div className="in">

                            <h6>Email 2 : </h6>
                            <h6>{dat.emailTwo}</h6>
                        </div>

                        <div className="in">

                            <h6>Address : </h6>
                            <h6>{dat.addressOne}</h6>
                        </div>

                        <div className="in">

                            <h6>Address 2: </h6>
                            <h6>{dat.addressTwo}</h6>
                        </div>

                        <div className="delete">

                            <button onClick={() => handleDelete(dat.id)}>Delete</button>
                        </div>

                    </div>


                </div>


            ))}

            {search && data2 && data2.map((dat) => (

                <div className="contact-container" key={dat.id}>

                    <div className="image">

                        <img src="../images/Default.png" alt="" />


                    </div>

                    <div className="contact-info">

                        <div className="in">

                            <h6>First Name : </h6>
                            <h5>{dat.firstName}</h5>
                        </div>

                        <div className="in">

                            <h6>Last Name : </h6>
                            <h5>{dat.lastName}</h5>
                        </div>

                        <div className="in">

                            <h6>Mob : </h6>
                            <h5>{dat.mob}</h5>
                        </div>

                        <div className="in">

                            <h6>Tel : </h6>
                            <h5>{dat.tel}</h5>
                        </div>

                        <div className="in">

                            <h6>Email: </h6>
                            <h6>{dat.emailOne}</h6>
                        </div>

                        <div className="in">

                            <h6>Email 2 : </h6>
                            <h6>{dat.emailTwo}</h6>
                        </div>

                        <div className="in">

                            <h6>Address : </h6>
                            <h6>{dat.addressOne}</h6>
                        </div>

                        <div className="in">

                            <h6>Address 2: </h6>
                            <h6>{dat.addressTwo}</h6>
                        </div>

                        <div className="delete">

                            <button onClick={() => handleDelete(dat.id)}>Delete</button>
                        </div>

                    </div>


                </div>


            ))}




            <div id="add">

                <form id="forms" onSubmit={handleSubmit}>

                    <h2>NEW CONTACT</h2>

                    <div className="adding">

                        <h3>First Name :</h3>
                        <input

                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Last Name :</h3>
                        <input type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Mob :</h3>
                        <input type="text"
                            required
                            value={mob}
                            onChange={(e) => setMob(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Tel :</h3>
                        <input type="text"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Email 1 :</h3>
                        <input type="text"
                            value={emailOne}
                            onChange={(e) => setEmailOne(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Email 2 :</h3>
                        <input type="text"
                            value={emailTwo}
                            onChange={(e) => setEmailTwo(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Address 1 :</h3>
                        <input type="text"
                            value={addressOne}
                            onChange={(e) => setAddressOne(e.target.value)} />
                    </div>

                    <div className="adding">

                        <h3>Address 2 : </h3>
                        <input type="text"
                            value={addressTwo}
                            onChange={(e) => setAddressTwo(e.target.value)} />
                    </div>

                    <button>ADD CONTACT</button>


                </form>

                <button id="close" onClick={closeModal}>Close</button>


            </div>








        </div>

    );
}

export default Content;