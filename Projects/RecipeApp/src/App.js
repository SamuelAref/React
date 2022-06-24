import LandingPage from "./components/LandingPage";
import useFetch from "./Hooks/useFetch";


function App() {


  const { data } = useFetch('http://localhost:3000/break');

  console.log(data);


  const handleBreakFast = () => {


    const breakFast = document.getElementById('breakFast');
    const breakCard = document.getElementById('breakCard');
    const breakIm = document.getElementById('im-b');


    const lunch = document.getElementById('lunch');
    const lunchCard = document.getElementById('lunchCard');
    const lunchIm = document.getElementById('im-l');


    const dinner = document.getElementById('dinner');
    const dinnerCard = document.getElementById('dinnerCard');
    const dinnerIm = document.getElementById('im-d');

    const baking = document.getElementById('baking');
    const bakingCard = document.getElementById('bakingCard');
    const bakingIm = document.getElementById('im-ba');


    breakIm.classList.add('im-b');
    breakCard.classList.add('card');
    breakFast.classList.add('breakFast');


    lunchIm.classList.remove('im-l');
    lunchCard.classList.remove('card');
    lunch.classList.remove('lunch');

    dinnerIm.classList.remove('im-d');
    dinnerCard.classList.remove('card');
    dinner.classList.remove('dinner');

    bakingIm.classList.remove('im-ba');
    bakingCard.classList.remove('card');
    baking.classList.remove('baking');
  }



  const handleLunch = () => {



    const breakFast = document.getElementById('breakFast');
    const breakCard = document.getElementById('breakCard');
    const breakIm = document.getElementById('im-b');


    const lunch = document.getElementById('lunch');
    const lunchCard = document.getElementById('lunchCard');
    const lunchIm = document.getElementById('im-l');


    const dinner = document.getElementById('dinner');
    const dinnerCard = document.getElementById('dinnerCard');
    const dinnerIm = document.getElementById('im-d');

    const baking = document.getElementById('baking');
    const bakingCard = document.getElementById('bakingCard');
    const bakingIm = document.getElementById('im-ba');


    breakIm.classList.remove('im-b');
    breakCard.classList.remove('card');
    breakFast.classList.remove('breakFast');


    lunchIm.classList.add('im-l');
    lunchCard.classList.add('card');
    lunch.classList.add('lunch');

    dinnerIm.classList.remove('im-d');
    dinnerCard.classList.remove('card');
    dinner.classList.remove('dinner');

    bakingIm.classList.remove('im-ba');
    bakingCard.classList.remove('card');
    baking.classList.remove('baking');
  }


  const handleDinner = () => {



    const breakFast = document.getElementById('breakFast');
    const breakCard = document.getElementById('breakCard');
    const breakIm = document.getElementById('im-b');


    const lunch = document.getElementById('lunch');
    const lunchCard = document.getElementById('lunchCard');
    const lunchIm = document.getElementById('im-l');


    const dinner = document.getElementById('dinner');
    const dinnerCard = document.getElementById('dinnerCard');
    const dinnerIm = document.getElementById('im-d');

    const baking = document.getElementById('baking');
    const bakingCard = document.getElementById('bakingCard');
    const bakingIm = document.getElementById('im-ba');


    breakIm.classList.remove('im-b');
    breakCard.classList.remove('card');
    breakFast.classList.remove('breakFast');


    lunchIm.classList.remove('im-l');
    lunchCard.classList.remove('card');
    lunch.classList.remove('lunch');

    dinnerIm.classList.add('im-d');
    dinnerCard.classList.add('card');
    dinner.classList.add('dinner');

    bakingIm.classList.remove('im-ba');
    bakingCard.classList.remove('card');
    baking.classList.remove('baking');
  }


  const handleBaking = () => {



    const breakFast = document.getElementById('breakFast');
    const breakCard = document.getElementById('breakCard');
    const breakIm = document.getElementById('im-b');


    const lunch = document.getElementById('lunch');
    const lunchCard = document.getElementById('lunchCard');
    const lunchIm = document.getElementById('im-l');


    const dinner = document.getElementById('dinner');
    const dinnerCard = document.getElementById('dinnerCard');
    const dinnerIm = document.getElementById('im-d');

    const baking = document.getElementById('baking');
    const bakingCard = document.getElementById('bakingCard');
    const bakingIm = document.getElementById('im-ba');


    breakIm.classList.remove('im-b');
    breakCard.classList.remove('card');
    breakFast.classList.remove('breakFast');


    lunchIm.classList.remove('im-l');
    lunchCard.classList.remove('card');
    lunch.classList.remove('lunch');

    dinnerIm.classList.remove('im-d');
    dinnerCard.classList.remove('card');
    dinner.classList.remove('dinner');

    bakingIm.classList.add('im-ba');
    bakingCard.classList.add('card');
    baking.classList.add('baking');
  }


  return (
    <div className="App">


      <LandingPage />


      <div className="output">

        <div className="options">

          <button onClick={() => handleBreakFast()}>BreakFast</button>
          <button onClick={() => handleLunch()}>Lunch</button>
          <button onClick={() => handleDinner()}>Dinner</button>
          <button onClick={() => handleBaking()}>Baking</button>

        </div>

        <div className="output-container">


          <div id="breakFast" className="breakFast">

            {!data && <h2>Loading ....</h2>}

            {data && data.map((dat) => (




              <div key={dat.id} id="breakCard" className="card" >


                <div id="im-b" class="im" style={{

                  backgroundImage: `url(images/alex-munsell-auIbTAcSH6E-unsplash.jpg)`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0px"

                }} > </div>

                <div id="ingredient-b" className="ingredient">

                  <h4>Ingredients</h4>

                  <ol id="ol-b" className="ol-b">
                    {dat.ingredients.map((ingredient) => (

                      <li id="ol-b" className="ol-b">{ingredient}</li>

                    ))}



                  </ol>


                </div>




              </div>



            ))}





          </div>

          <div id="lunch" >


            <div id="lunchCard">












            </div>


          </div>

          <div id="dinner" >


            <div id="dinnerCard">




            </div>


          </div>

          <div id="baking" >


            <div id="bakingCard">




            </div>


          </div>







        </div>





      </div>

    </div>
  );
}

export default App;
