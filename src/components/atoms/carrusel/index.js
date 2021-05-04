import PropTypes from 'prop-types';
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
  ContainerImage,
  ImageCard,
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

  // const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />;
  const changeStyle = type === consts.PREV ? true : false;

  return (
    <ContentArrows>
      <>
        <ContentArrowSecundary onClick={onClick} currentSlide={changeStyle}>
          <ArrowLeft />
        </ContentArrowSecundary>

        <ContentArrowSecundary onClick={onClick} currentSlide={isEdge}>
          <ArrowRight />
        </ContentArrowSecundary>
      </>
    </ContentArrows>
  );
};

const Carrusel = (props) => {
  const { dataCarrusel } = props;
  console.log('dataCarrusel', dataCarrusel);
  return (
    <>
      <ContentCarrusel>
        <Carousel breakPoints={breakPoints} renderArrow={Arrows}>
          {dataCarrusel.map((itemCard, index) => (
            <ContentCard key={index}>
              <ContentTitle>
                {itemCard.urlImage ? (
                  <ImageCard src={`${itemCard.urlImage}`} />
                ) : (
                  itemCard.icon
                )}
                <TitleComponet
                  variant="title"
                  color="#0063FB"
                  fontSize="12px"
                  marginText="25px auto 8px"
                >
                  {itemCard.title}
                </TitleComponet>
                <TitleComponet
                  variant="title"
                  color="#272727"
                  fontSize="30px"
                  marginText="4px auto 0px"
                >
                  {itemCard.subTitle}
                </TitleComponet>
                <TitleComponet
                  variant="subtitle"
                  color="#818181"
                  fontSize="16px"
                  marginText="16px auto 0px"
                >
                  {itemCard.description}
                </TitleComponet>
              </ContentTitle>
              <ContentFooterCard>
                {itemCard.showText && (
                  <a href={`${itemCard.urllinkedin}`} target="_blank">
                    <p>Ver en Linkedin</p>
                  </a>
                )}
              </ContentFooterCard>
            </ContentCard>
          ))}
        </Carousel>
      </ContentCarrusel>
    </>
  );
};

function ArrowLeft(props) {
  return (
    <svg width="14" height="24" viewBox="0 0 14 24" onClick={props.onClick}>
      <defs>
        <path
          id="a"
          d="M9.625 11.687l-9.12 8.837a1.633 1.633 0 000 2.36 1.762 1.762 0 002.436 0L13.28 12.869a1.633 1.633 0 000-2.362L2.94.49a1.762 1.762 0 00-2.436 0 1.633 1.633 0 000 2.361l9.12 8.837z"
        ></path>
      </defs>
      <g fill="none" stroke="none">
        <g transform="translate(-100 -2319)">
          <g transform="translate(80 2304)">
            <g transform="matrix(-1 0 0 1 34 15)">
              <mask fill="#fff">
                <use href="#a"></use>
              </mask>
              <use fill="#000" href="#a"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg width="14" height="24" viewBox="0 0 14 24" onClick={props.onClick}>
      <defs>
        <path
          id="a"
          d="M9.625 11.687l-9.12 8.837a1.633 1.633 0 000 2.36 1.762 1.762 0 002.436 0L13.28 12.869a1.633 1.633 0 000-2.362L2.94.49a1.762 1.762 0 00-2.436 0 1.633 1.633 0 000 2.361l9.12 8.837z"
        ></path>
      </defs>
      <g fill="none" stroke="none">
        <g transform="translate(-164 -2320)">
          <g transform="translate(80 2304)">
            <g transform="translate(84 16)">
              <mask fill="#fff">
                <use href="#a"></use>
              </mask>
              <use fill="#000" href="#a"></use>
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
  dataCarrusel: [],
};

Carrusel.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
  dataCarrusel: PropTypes.array,
};

export default Carrusel;
