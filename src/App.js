import { useState } from "react";
import img1 from "./assets/img1.png"
import img3 from "./assets/img2.png"
import text from "./assets/text.png"
function App() {
  const [offest, setOffest] = useState()
  const [posti, setPosit] = useState()

  const handleScroll = () => setOffest(window.pageYOffset)

 const handlePosit = () => setPosit(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', handlePosit)

  return (
    <div className="App">

      <div className="zoom" style={{
       
      }}>
        <img src={img1} alt="" id="img1"
          style={{ 
            width: (60 + offest * 0.3) + '%' ,
            left:-(0 + posti * 0.3) + '%'
           
         }}
        />
        <img src={img3} alt="" id="img2"
          style={{ width: (50 + offest * 0.3) + '%' ,  right:-(0 + posti * 0.3) + '%'}}
        />
        <img src={text} alt="" id="text" 
        style={{top:`-${20 + offest * 0.3 + '%'}`}}
        />
      </div>

      <div className="content">
        <h2>Simple Paralax effect with React</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur velit sint harum corrupti explicabo necessitatibus error consequuntur atque nostrum optio maiores asperiores quis, doloribus quibusdam tempore, enim, blanditiis autem expedita totam! Omnis nemo ullam ducimus laboriosam voluptates perspiciatis laborum facilis ipsum blanditiis obcaecati quod sed amet consequatur impedit consectetur, optio quisquam, corrupti delectus dolor excepturi. Sint blanditiis, quibusdam laudantium perspiciatis necessitatibus aspernatur distinctio error inventore sequi, id velit reprehenderit fugiat vitae minus? Officia veniam eligendi consequatur! Cumque ut quidem voluptates, aliquam laborum sunt ipsa ratione tempora laudantium minus rerum at, incidunt voluptas. Velit libero, iusto illum ex incidunt eveniet adipisci iste, veritatis molestias ratione iure? Eligendi blanditiis dolores exercitationem ipsum veritatis, temporibus harum minus tempora officiis enim, sint eveniet, saepe amet incidunt odio dolore aspernatur ea soluta architecto in non quis. Consequuntur sapiente perspiciatis possimus debitis aut esse quidem obcaecati impedit quia totam ratione, fugiat, reprehenderit dolores atque repellat ab autem quasi? Nemo eius suscipit, dolorum animi fugiat minima deserunt magnam veniam ipsam minus aspernatur voluptatibus, inventore laborum tempora quia voluptatem distinctio reprehenderit accusamus rem harum? Tempora atque eos esse magnam iure inventore temporibus. Reprehenderit, accusamus? Fuga eligendi recusandae, eius eveniet atque saepe inventore nam, quisquam accusamus pariatur doloremque.
        </p>
      </div>

    </div>
  );
}

export default App;
