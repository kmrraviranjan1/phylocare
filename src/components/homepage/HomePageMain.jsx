import React from "react";
import hero from "../../assets/heroImage.jpg";
import OurProducts from "./OurProducts";
const HomePageMain = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-yellow-100">
      <header className="w-full h-screen bg-[url('https://res.cloudinary.com/raviimagedb/image/upload/v1692079957/heroImage_qa2b4l.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
            WELCOME TO
            <span className="text-amber-500">PHYLOCARE</span>
          </h1>
          <p className="mt-5 text-center text-3xl text-stone-950 ">
          Phylocare private limited is a pure Ayurveda company which provides
          pure and natural products.
          </p>
          <a
            className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
            href="#our_products"
          >
            Explore Products
          </a>
        </div>
      </header>
      <div className="p-2 px-4">

      <main>
        <article>
          Phylocare ayurvedic medicine can truly enhance the quality of your
          life and leads to healthy and happier day.
        </article>
      </main>
      <br />
      <div>
        <h4 id='our_products' className=" underline text-lg">Our range of Products :-</h4>
        <br />
       <OurProducts/>
      </div>
      <br />
      <p>
        We are providing the high quality product to the consumer at affordable
        prices
      </p>
    </div>
    </div>

  );
};

export default HomePageMain;
