import React from "react";

const List = (props) => {
  const {people} = props;

  //for(let i =0; i>people.length ; i++){
  //return (
   // <div>
   //   <article className="person">
   //     <img src="" alt="profile image" />
   //     <div>
   //       <h4>Siwakorn Dorin</h4>
   //       <p> 21 </p>
   //     </div>
   //   </article>
   // </div>
  //);
  //}



return (
  <div>
    {
      people.map((person)=>{
        const {id, name, age, image} = person;
        return (
    <div>
      <article className="person" key={id}>
        <img src={image} alt="profile image" />
        <div>
          <h4>{name}</h4>
          <p> {age} years old</p>
        </div>
      </article>
    </div>
  );
      })
    }
  </div>
);
};

export default List;
