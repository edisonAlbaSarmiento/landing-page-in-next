import {
  Content,
  ContentTitle,
  ContentImage,
  ContentImageBackBackground,
  ContentImageBackground,
  Title,
  SubTitle,
  ContentButton,
} from './styles';
import Image from 'next/image';
import { Typography, ButtonContact } from 'components/atoms';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function ContentHeader(props) {
  return (
    <Content>
      <ContentTitle>
        <Image
          src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/iconImaginamos.png"
          alt="Picture of the author"
          width={200}
          height={60}
        />
        <Bounce left>
          <Typography variant="header">
            <Title>Vivimos para transformar el futuro</Title>
          </Typography>
          <Typography variant="title">
            <SubTitle>
              Construyendo ecosistemas digitales de alto impacto.
            </SubTitle>
          </Typography>
          <ContentButton>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/teamImaginamos.png"
              alt="team imaginamos"
              width={480}
              height={100}
            />
          </ContentButton>
        </Bounce>
        <ButtonContact
          widthButton="30%"
          heightButtom="10%"
          onClick={() => console.log('click')}
        >
          AGENDAR UNA CITA
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

export default ContentHeader;
