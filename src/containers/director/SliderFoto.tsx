import React from 'react';
import Slider from 'react-slick';
import './SliderFoto.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Directors from '../../locales/en/translation.json';

interface PROPS {
  director: string;
}

export default function SliderFoto(props: PROPS) {
  const { director } = props;
  const dataDirector: any = Directors;
  const urlFotoList = dataDirector[director].img;

  const fotoList = urlFotoList.map((urlFoto: string, index: number) => (
    <img key={`${director}work${index}`} src={urlFoto}></img>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>{fotoList}</Slider>
    </div>
  );
}
