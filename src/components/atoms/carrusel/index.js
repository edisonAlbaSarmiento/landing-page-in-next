import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { TitleComponet } from 'components/atoms';
import Carousel, { consts } from 'react-elastic-carousel';

import {
  ContentCarrusel,
  ContentCard,
  ContentArrows,
  ContentArrowSecundary,
  ContentTitle,
  ContentFooterCard,
  ContainerIcon,
} from './styles';
import { IconBusiness } from '../../../static/icons';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Arrows = ({ type, onClick, isEdge }) => {
  console.info('isEdge', [type, isEdge, consts, onClick]);

  const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />;
  return (
    <ContentArrows>
      <>
        <ContentArrowSecundary
          onClick={onClick}
          currentSlide={type === consts.NEXT}
        >
          <ArrowLeft />
        </ContentArrowSecundary>

        <ContentArrowSecundary
          onClick={onClick}
          currentSlide={type === consts.PREV}
        >
          <ArrowRight />
        </ContentArrowSecundary>
      </>
    </ContentArrows>
  );
};
const Carrusel = (props) => {
  //   const { color, variant, fontSize, marginText } = props;
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [sliderRef, slider] = useKeenSlider({
  //   initial: 0,
  //   slideChanged(s) {
  //     setCurrentSlide(s.details().relativeSlide);
  //   },
  // });
  const showText = false;
  return (
    <>
      <ContentCarrusel>
        <Carousel breakPoints={breakPoints} renderArrow={Arrows}>
          <ContentCard>
            <ContentTitle>
              <IconBusiness />
              <TitleComponet
                variant="title"
                color="#0063FB"
                fontSize="12px"
                marginText="25px auto 8px"
              >
                Consultoría
              </TitleComponet>
              <TitleComponet
                variant="title"
                color="#272727"
                fontSize="30px"
                marginText="4px auto 0px"
              >
                Negocios Digitales
              </TitleComponet>
              <TitleComponet
                variant="subtitle"
                color="#818181"
                fontSize="16px"
                marginText="16px auto 0px"
              >
                Construimos el futuro a través de modelos de negocio digitales
                disruptivos.
              </TitleComponet>
            </ContentTitle>
            <ContentFooterCard>
              {showText && <p>Ver en linkedin</p>}
            </ContentFooterCard>
          </ContentCard>
          <ContentCard>
            <ContentTitle>
              <IconBusiness />
              <TitleComponet
                variant="title"
                color="#0063FB"
                fontSize="12px"
                marginText="25px auto 8px"
              >
                Consultoría
              </TitleComponet>
              <TitleComponet
                variant="title"
                color="#272727"
                fontSize="30px"
                marginText="4px auto 0px"
              >
                Negocios Digitales
              </TitleComponet>
              <TitleComponet
                variant="subtitle"
                color="#818181"
                fontSize="16px"
                marginText="16px auto 0px"
              >
                Construimos el futuro a través de modelos de negocio digitales
                disruptivos.
              </TitleComponet>
            </ContentTitle>
            <ContentFooterCard>
              {showText && <p>Ver en linkedin</p>}
            </ContentFooterCard>
          </ContentCard>
          <ContentCard>
            <ContentTitle>
              <IconBusiness />
              <TitleComponet
                variant="title"
                color="#0063FB"
                fontSize="12px"
                marginText="25px auto 8px"
              >
                Consultoría
              </TitleComponet>
              <TitleComponet
                variant="title"
                color="#272727"
                fontSize="30px"
                marginText="4px auto 0px"
              >
                Negocios Digitales
              </TitleComponet>
              <TitleComponet
                variant="subtitle"
                color="#818181"
                fontSize="16px"
                marginText="16px auto 0px"
              >
                Construimos el futuro a través de modelos de negocio digitales
                disruptivos.
              </TitleComponet>
            </ContentTitle>
            <ContentFooterCard>
              {showText && <p>Ver en linkedin</p>}
            </ContentFooterCard>
          </ContentCard>
          <ContentCard>
            <ContentTitle>
              <IconBusiness />
              <TitleComponet
                variant="title"
                color="#0063FB"
                fontSize="12px"
                marginText="25px auto 8px"
              >
                Consultoría
              </TitleComponet>
              <TitleComponet
                variant="title"
                color="#272727"
                fontSize="30px"
                marginText="4px auto 0px"
              >
                Negocios Digitales
              </TitleComponet>
              <TitleComponet
                variant="subtitle"
                color="#818181"
                fontSize="16px"
                marginText="16px auto 0px"
              >
                Construimos el futuro a través de modelos de negocio digitales
                disruptivos.
              </TitleComponet>
            </ContentTitle>
            <ContentFooterCard>
              {showText && <p>Ver en linkedin</p>}
            </ContentFooterCard>
          </ContentCard>
          <ContentCard>
            <ContentTitle>
              <IconBusiness />
              <TitleComponet
                variant="title"
                color="#0063FB"
                fontSize="12px"
                marginText="25px auto 8px"
              >
                Consultoría
              </TitleComponet>
              <TitleComponet
                variant="title"
                color="#272727"
                fontSize="30px"
                marginText="4px auto 0px"
              >
                Negocios Digitales
              </TitleComponet>
              <TitleComponet
                variant="subtitle"
                color="#818181"
                fontSize="16px"
                marginText="16px auto 0px"
              >
                Construimos el futuro a través de modelos de negocio digitales
                disruptivos.
              </TitleComponet>
            </ContentTitle>
            <ContentFooterCard>
              {showText && <p>Ver en linkedin</p>}
            </ContentFooterCard>
          </ContentCard>
        </Carousel>
      </ContentCarrusel>
    </>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    // <svg
    //   onClick={props.onClick}
    //   className={'arrow arrow--left' + disabeld}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    // </svg>
    <svg width="14" height="24" viewBox="0 0 14 24" onClick={props.onClick}>
      <defs>
        <path
          id="a"
          d="M9.625 11.687l-9.12 8.837a1.633 1.633 0 000 2.36 1.762 1.762 0 002.436 0L13.28 12.869a1.633 1.633 0 000-2.362L2.94.49a1.762 1.762 0 00-2.436 0 1.633 1.633 0 000 2.361l9.12 8.837z"
        ></path>
      </defs>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g transform="translate(-100 -2319)">
          <g transform="translate(80 2304)">
            <g transform="matrix(-1 0 0 1 34 15)">
              <mask fill="#fff">
                <use href="#a"></use>
              </mask>
              <use fill="#000" fill-rule="nonzero" href="#a"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    // <svg
    //   onClick={props.onClick}
    //   className={'arrow arrow--right' + disabeld}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    // </svg>
    <svg width="14" height="24" viewBox="0 0 14 24" onClick={props.onClick}>
      <defs>
        <path
          id="a"
          d="M9.625 11.687l-9.12 8.837a1.633 1.633 0 000 2.36 1.762 1.762 0 002.436 0L13.28 12.869a1.633 1.633 0 000-2.362L2.94.49a1.762 1.762 0 00-2.436 0 1.633 1.633 0 000 2.361l9.12 8.837z"
        ></path>
      </defs>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g transform="translate(-164 -2320)">
          <g transform="translate(80 2304)">
            <g transform="translate(84 16)">
              <mask fill="#fff">
                <use href="#a"></use>
              </mask>
              <use fill="#000" fill-rule="nonzero" href="#a"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Carrusel.defaultProps = {
  color: '#7bf5b1',
  marginText: '0px',
};

Carrusel.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
};

export default Carrusel;
