import React from "react";
import { Grid} from "semantic-ui-react";
import Cards from "../Cards/Cards";
import { content } from "../content";
import "../header.css";

const Article = () => {
  return (
    <div className="p-4">
      <div className="flex justify-start">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Ribeye&display=swap');
        </style>
        <h2 className="header">Articles</h2>
      </div>
      <div className="p-4">
        <div className=" p-8 bg-pink-600 bg-opacity-40 h-auto max-w-full w-screen">
          <Grid container columns='equal'>
            <Grid.Row>
              {
                content.map((item, i) => 
                  <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                    <Cards title={item.title} author={item.author} article={item.article} />
                  </Grid.Column>
                )
              }
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Article;
