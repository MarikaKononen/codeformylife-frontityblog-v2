import React from "react";
import { connect, styled } from "frontity";
import Background from './img/metsa.png';


const Image = ({img}) => {
    
    return  (
      <Container>
        <img className="responsive-img" src={img} />
      </Container>
    ) 
  };

  export default connect(Image);



  const Container = styled.div`
    width: 100%;    

  `;