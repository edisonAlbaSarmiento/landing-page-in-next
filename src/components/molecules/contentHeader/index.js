import {
  Content,
  ContentTitle,
  ContentImage,
  ContentImageBackBackground,
  ContentImageBackground,
  ContentButton,
  ContainerIcon,
} from './styles';
import Image from 'next/image';
import { ButtonContact, TitleComponet } from 'components/atoms';
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
          <TitleComponet variant="title" marginText="revert" color="#7bf5b1">
            {textTitle}
          </TitleComponet>
          <TitleComponet
            variant="subtitle"
            fontSize="25px"
            marginText="20px 0px 40.5px"
            color="#FFFFFF"
          >
            {subTitle}
          </TitleComponet>
          <ContentButton>
            <IconRappi />
            <IconGrability />
            <IconMerlin />
            <IconChiper />
          </ContentButton>
        </Bounce>
        <ButtonContact
          widthButton="30%"
          heightButtom="10%"
          onClick={onClick}
          backgroundColorButton="transparent"
          color="#FFFFFF"
          borderColor="#7bf5b1"
          title
        >
          {textButtom}
        </ButtonContact>
      </ContentTitle>
      <ContentImageBackBackground>
        <ContentImage>
          <Fade top>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/BackgroundBack.png"
              alt="back image header"
              width={380}
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

ContentHeader.defaultProps = {
  textTitle: '',
  subTitle: '',
  textButtom: 'Test title',
  onClick: () => {},
};

ContentHeader.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  textButtom: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContentHeader;
