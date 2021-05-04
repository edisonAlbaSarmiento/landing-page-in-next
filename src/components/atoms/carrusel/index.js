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
  ImageCard,
} from './styles';
import { ArrowLeft, ArrowRight } from '../../../static/icons';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Arrows = ({ type, onClick, isEdge }) => {
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

const ArrowsFooter = ({ type, onClick, isEdge }) => {
  // const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />;
  const changeStyle = type === consts.PREV ? true : false;
  const marginTopButtom = true;
  return (
    <ContentArrows marginTopButtom>
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
  const { dataCarrusel, heightCard, fontSizeText, marginTopButtom } = props;
  console.log('marginTopButtom', marginTopButtom);
  return (
    <>
      <ContentCarrusel>
        <Carousel
          breakPoints={breakPoints}
          renderArrow={marginTopButtom ? ArrowsFooter : Arrows}
        >
          {dataCarrusel.map((itemCard, index) => (
            <ContentCard key={index} heightCard={heightCard}>
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
                  fontSize={`${fontSizeText}`}
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

Carrusel.defaultProps = {
  color: '#7bf5b1',
  marginText: '0px',
  dataCarrusel: [],
  heightCard: '380px',
  fontSizeText: '30px',
  marginTopButtom: false,
};

Carrusel.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
  dataCarrusel: PropTypes.array,
  heightCard: PropTypes.string,
  fontSizeText: PropTypes.string,
  marginTopButtom: PropTypes.bool,
};

export default Carrusel;
