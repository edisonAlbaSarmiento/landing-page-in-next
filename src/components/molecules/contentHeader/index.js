import {
  Content,
  ContentTitle,
  ContentImage,
  ContentImageBackBackground,
  ContentImageBackground,
  Title,
  SubTitle,
} from './styles';
import Image from 'next/image';
import { Typography } from 'components/atoms';

function ContentHeader(props) {
  return (
    <>
      <Image
        src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/iconImaginamos.png"
        alt="Picture of the author"
        width={190}
        height={80}
      />
      <Content>
        <ContentTitle>
          <Typography variant="header">
            <Title>Vivimos para transformar el futuro</Title>
          </Typography>
          <Typography variant="title">
            <SubTitle>
              Construyendo ecosistemas digitales de alto impacto.
            </SubTitle>
          </Typography>
        </ContentTitle>

        <ContentImageBackBackground>
          <ContentImageBackground>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/BackgroundHeader.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </ContentImageBackground>
          <ContentImage>
            <Image
              src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/BackgroundBack.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </ContentImage>
        </ContentImageBackBackground>
      </Content>
    </>
  );
}

export default ContentHeader;
