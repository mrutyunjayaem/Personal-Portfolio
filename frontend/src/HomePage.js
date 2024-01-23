import React from "react";
import Header from "./Header";
import Description from "./Description";
import Card from "./Card";
import skills_info from "./Skills_Info";
import Footer from "./Footer";


function HomePage() {
    return (<div>
    <div className="bg_design min-h-[115vh]">
    <Header />
    <Description />
    </div>
    <div className="card_body">
      <div>
        <div className="heading">
          <h1 className="mt-0 pt-0">My Skills</h1>
        </div>
        <div className="flex-container">
          <div className="card-container">
            <div className="card_body">
              <Card
                name={skills_info[0].name}
                img={skills_info[0].imgURL}
                content={skills_info[0].content_fill}
              />
            </div>
          </div>
          <div className="card-container">
            <div className="card_body">
              <Card
                name={skills_info[1].name}
                img={skills_info[1].imgURL}
                content={skills_info[1].content_fill}
              />
            </div>
          </div>
          <div className="card-container">
            <div className="card_body">
              <Card
                name={skills_info[2].name}
                img={skills_info[2].imgURL}
                content={skills_info[2].content_fill}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>);
}

export default HomePage;