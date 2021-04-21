import { Typography, ButtonContact } from '../../atoms';
import {
  IconCaseGrability,
  IconCaseChiper,
  IconCaseRappi,
} from '../../../static/icons';
import {
  ContainerMolecule,
  ContentButtonCases,
  ContentMain,
  ContentTextCases,
  ContentImageCases,
  ContentButton,
} from './styles';
import Image from 'next/image';

function ContentCases(params) {
  return (
    <ContainerMolecule>
      <Typography variant="header">Casos de estudio</Typography>
      <Typography variant="title">
        Estos son algunos de nuestros casos de éxito
      </Typography>

      <ContentMain>
        <ContentButtonCases>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#FF2E4B"
              borderColor="#FFFF"
              isSelect
              borderRadius="16px"
            >
              <IconCaseRappi />
            </ButtonContact>
          </ContentButton>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#F80135"
              borderColor="#FFFF"
              borderRadius="16px"
            >
              <IconCaseChiper />
            </ButtonContact>
          </ContentButton>
          <ContentButton>
            <ButtonContact
              widthButton="80px"
              heightButtom="80px"
              backgroundColorButton="#05CE7C"
              borderColor="#FFFF"
              borderRadius="16px"
            >
              <IconCaseGrability />
            </ButtonContact>
          </ContentButton>
        </ContentButtonCases>
        <ContentTextCases>
          <Typography variant="header">Casos de estudio</Typography>
          <Typography variant="title">
            Estos son algunos de nuestros casos de éxito
          </Typography>
          <Typography variant="title">
            Estos son algunos de nuestros casos de éxito
          </Typography>
        </ContentTextCases>
        <ContentImageCases>
          <Image
            src={
              'https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/RappiImage.png'
            }
            alt="Rappi"
            width={200}
            height={200}
          />
        </ContentImageCases>
      </ContentMain>
    </ContainerMolecule>
  );
}

export default ContentCases;
