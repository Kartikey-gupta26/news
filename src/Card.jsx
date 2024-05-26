import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";

function Card({ selectedCountry }) {
  const [cards, setcards] = useState([]);
  console.log("In card", selectedCountry);
  const fetchData = async () => {
    let link =
      "https://newsapi.org/v2/top-headlines?country=" +
      selectedCountry +
      "&apiKey=f7f2b47008514fa1bc9c72d3c0dfd0d5";
    console.log(link);
    let a = await fetch(link);
    let data = await a.json();
    const articles = data.articles;
    setcards(articles);
    console.log(articles);
  };
  useEffect(() => {
    fetchData();
  }, [selectedCountry]);

  return (
    <div className="cardholder p-10 max-w-fit  flex place-content-evenly flex-wrap gap-10 ">
      {cards.map((card, index) => (
        <a href={card.url} target="_blank" key={index}>
          <div
            key={index}
            className="card flex flex-col h-auto w-[500px] bg-black  rounded-lg p-4 shadow-md"
          >
            <div className="title p-3">
              <b className="text-l">{card.title} </b>
            </div>
            <div className="image flex flex-col m-4 h-auto w-auto *:">
              <img
                className="rounded-lg"
                src={
                  card.urlToImage
                    ? card.urlToImage
                    : "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
                }
                alt="https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
              />
              <div className="play">
                <p className="opacity-100 p-1 text-center rounded-md">
                  <b>Click to read this article</b>
                </p>
              </div>
            </div>

            <p className="text-pretty p-3">{card.description}</p>
            {/* <p>{card.content}</p> */}
          </div>
        </a>
      ))}
    </div>
  );
}

export default Card;
