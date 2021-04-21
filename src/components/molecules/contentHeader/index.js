import {
  Content,
  ContentTitle,
  ContentImage,
  ContentImageBackBackground,
  ContentImageBackground,
  Title,
  SubTitle,
  ContentButton,
  ContainerIcon,
} from './styles';
import Image from 'next/image';
import { Typography, ButtonContact } from 'components/atoms';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';
import {
  IconImaginamos,
  IconRappi,
  IconGrability,
  IconMerlin,
  IconChiper,
} from '../../../static/icons';
function ContentHeader(props) {
  const { textTitle, subTitle, textButtom, onClick } = props;
  return (
    <Content>
      <ContentTitle>
        <ContainerIcon>
          <IconImaginamos />
        </ContainerIcon>
        <Bounce left>
          <Typography variant="header">
            <Title>{textTitle}</Title>
          </Typography>
          <Typography variant="title">
            <SubTitle>{subTitle}</SubTitle>
          </Typography>
          <ContentButton>
            <IconRappi />
            <IconGrability />
            <IconMerlin />
            <IconChiper />
          </ContentButton>
        </Bounce>
        <ButtonContact widthButton="30%" heightButtom="10%" onClick={onClick}>
          {textButtom}
        </ButtonContact>
      </ContentTitle>
      <ContentImageBackBackground>
        <ContentImage>
          <Fade top>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/BackgroundBack.png"
              alt="back image header"
              width={500}
              height={706}
            />
          </Fade>
        </ContentImage>
        <ContentImageBackground>
          <Fade right>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/BackgroundHeader.png"
              alt="cellphone"
              width={550}
              height={620}
            />
          </Fade>
        </ContentImageBackground>
      </ContentImageBackBackground>
    </Content>
  );
}

ContentHeader.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  textButtom: PropTypes.string,
  onClick: PropTypes.func,
};

ContentHeader.defaultProps = {
  textTitle: '',
  subTitle: '',
  textButtom: 'Test title',
  onClick: () => {},
};

export default ContentHeader;
