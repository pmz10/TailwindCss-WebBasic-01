import React from "react";

export const Banner = () => {
  return (
    <section className="container w-11/12 mx-auto">
      <div id="banner" className="w-full h-28 border-8 border-white mx-auto overflow-hidden bg-black shadow m-5 bg-banner bg-banner-position animate-bg-banner">
        <h1 className="bebas text-white block text-4xl font-normal tracking-wider m-7 mx-auto text-center drop-shadow-md ">Cursos de Desarrollo Web</h1>
      </div>
    </section>
  );
};

export default Banner;
