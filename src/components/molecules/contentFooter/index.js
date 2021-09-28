import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
  Content,
  ImageCard,
  ContentPrimary,
  ContentPrimaryFooter,
  ContentChild,
  ContentNetworks,
  ContentPrimaryTitles,
  TextFooter,
  Redirect,
} from './styles';

function ContentFooter(params) {
  return (
    <Content>
      <ContentPrimary>
        <ImageCard src='https://i0.wp.com/www.imaginamos.com/wp-content/uploads/2021/04/Vector.png?fit=208%2C208&ssl=1' />
        <ContentPrimaryFooter>
          <ContentPrimaryTitles>
            <ContentChild>
              <Redirect
                href='https://imaginamoscom.typeform.com/to/wTCqDuyF'
                fontSize={'16px'}
              >
                Términos y condiciones
              </Redirect>
            </ContentChild>
            <ContentChild>
              <Redirect
                href='https://imaginamoscom.typeform.com/to/wTCqDuyF'
                fontSize={'16px'}
              >
                Políticas
              </Redirect>
            </ContentChild>
            <ContentChild>
              <Redirect
                href='https://imaginamoscom.typeform.com/to/wTCqDuyF'
                fontSize={'16px'}
              >
                Contacto
              </Redirect>
            </ContentChild>
          </ContentPrimaryTitles>
          <ContentChild>
            <p>
              <TextFooter>
                En Imaginamos nos encanta conocer todas sus opiniones,
                sugerencias o reconocimientos sobre nuestros servicios. Para
                presentar su manifestación en la modalidad de Petición, Queja,
                Reclamo, Sugerencia y/o Felicitación,
              </TextFooter>
              <Redirect
                href='https://imaginamoscom.typeform.com/to/wTCqDuyF'
                fontWeight='true'
              >
                haga clic aquí
              </Redirect>
            </p>
          </ContentChild>
        </ContentPrimaryFooter>
      </ContentPrimary>
      <ContentNetworks>
        <div>
          <LinkedInIcon style={{ fontSize: 23, color: '#ffffff' }} />
        </div>
        <div>
          <InstagramIcon style={{ fontSize: 23, color: '#ffffff' }} />
        </div>
        <div>
          <FacebookIcon style={{ fontSize: 23, color: '#ffffff' }} />
        </div>
        <div>
          <TwitterIcon style={{ fontSize: 23, color: '#ffffff' }} />
        </div>
      </ContentNetworks>
    </Content>
  );
}

export default ContentFooter;
