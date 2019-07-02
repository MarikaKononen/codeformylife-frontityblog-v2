import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";



const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Column>

        <FeaturedMedia id={item.featured_media} />
        <Fecha>
            {" "}
            <b>{date.toDateString()}</b>
        </Fecha>  
     
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
        
         
      </Column>
  </article>
  
    
  );
};

export default connect(Item);


const Column = styled.div`
  text-align: center;
  padding: 0 15px;
  border: 1px solid #009999;
  float: left;
  background-color: #f0f5f5;
  border-radius: 15px;
  width: 28%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 850px) and (min-width: 768px) {
    width: 40%;
  }
  margin: 15px;

`;


const Title = styled.h1`
  color: rgba(12, 17, 43);
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 1.5rem;
  min-height:100px;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;


const Fecha = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
  
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  font-size: 0.8rem;
`;
