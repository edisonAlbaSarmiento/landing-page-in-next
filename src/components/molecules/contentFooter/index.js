import {
  Content,
  ImageCard,
  ContentPrimary,
  ContentPrimaryFooter,
  ContentChild,
  ContentNetworks,
} from './styles';

function ContentFooter(params) {
  return (
    <Content>
      <ContentPrimary>
        <ImageCard src='https://i0.wp.com/www.imaginamos.com/wp-content/uploads/2021/04/Vector.png?fit=208%2C208&ssl=1' />
        <ContentPrimaryFooter>
          <ContentChild>Términos y condiciones</ContentChild>
          <ContentChild>Políticas </ContentChild>
          <ContentChild>Contacto </ContentChild>
          <ContentChild>
            En Imaginamos nos encanta conocer todas sus opiniones, sugerencias o
            reconocimientos sobre nuestros servicios. Para presentar su
            manifestación en la modalidad de Petición, Queja, Reclamo,
            Sugerencia y/o Felicitación, haga clic aquí
          </ContentChild>
        </ContentPrimaryFooter>
      </ContentPrimary>
      <ContentNetworks>
        <div style={{ backgroundColor: 'yellow' }}>R </div>
        <div style={{ backgroundColor: 'yellow' }}>R </div>
        <div style={{ backgroundColor: 'yellow' }}>R </div>
        <div style={{ backgroundColor: 'yellow' }}>R </div>
      </ContentNetworks>
    </Content>
  );
}

export default ContentFooter;
