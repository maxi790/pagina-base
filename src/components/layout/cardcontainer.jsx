import react from "react";
import batman from "../../public/img/batman.png";

function cardconteiner(){
    return(

<section class="card-container">
        <div className="card" style={{width: "18 rem" }}>
          <img src={batman} className="card-img-top" alt="foto" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          
      </section>
    );
}

export default cardconteiner;