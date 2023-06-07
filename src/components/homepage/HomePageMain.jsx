import React from "react";

const HomePageMain = () => {
  return (
    <div className="p-2">
      <main>
        <article>
          Phylocare private limited is the pure ayurvedic company which provide
          pure and natural products.
        </article>
        <article>
          Phylocare ayurvedic can truly enhance the quality of your life healthy
          and happier.
        </article>
      </main>
      <br />
      <div>
        <h4 className=" underline text-lg">Our range of Products :-</h4>
        <br />
        <ul className="list-disc list-inside" >
          <li >Phylocare Hair Oil</li>
          <li>Phylocare Amla Shampoo</li>
          <li>Phylocare Conditioner</li>
          <li>Phylocare Mahabhngraj Tail</li>
          <li>Phylocare oil (Pain Killer Oil)</li>
          <li>Phylocare tab (Pain killer tab)</li>
          <li>...and many more ayurvedic range products</li>
        </ul>
      </div>
      <br />
      <p>
        We are providing the high quality product to the consumer at affordable
        prices
      </p>
    </div>
  );
};

export default HomePageMain;
