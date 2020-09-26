import React from "react";
import "./Home.css";
import { Product } from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        {/* Product id rating title price image */}
        <Product
          id="2"
          rating={5}
          price="37.48 - 105.00"
          title="Desigual Women's Vest_Praga Dress"
          image="https://m.media-amazon.com/images/I/91NnKOUKhHL._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="1"
          rating={5}
          price="11.96"
          title="Amazon Brand: Truth & Fable Women's A-Line Chiffon Dress"
          image="https://m.media-amazon.com/images/I/91LV+Q0HpqL._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product id rating title price image */}
        <Product
          id="1"
          rating={5}
          price="11.96"
          title="Amazon Brand: Truth & Fable Women's A-Line Chiffon Dress"
          image="https://m.media-amazon.com/images/I/81ohNE5OzRL._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="1"
          rating={5}
          price="11.96"
          title="Amazon Brand: Truth & Fable Women's A-Line Chiffon Dress"
          image="https://m.media-amazon.com/images/I/819ym1BZk+L._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          id="1"
          rating={5}
          price="11.96"
          title="Amazon Brand: Truth & Fable Women's A-Line Chiffon Dress"
          image="https://m.media-amazon.com/images/I/71dY2nVpzRL._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product id rating title price image */}
        <Product
          id="2"
          rating={5}
          price="37.48 - 105.00"
          title="Desigual Women's Vest_Praga Dress"
          image="https://m.media-amazon.com/images/I/81Ls8w5w+BL._SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
