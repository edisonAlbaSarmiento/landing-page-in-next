import { Content } from './styles';
import Image from 'next/image';

function ContentHeader(props) {
  return (
    <Content>
      <h1>hola</h1>
      <Image
        src="https://raw.githubusercontent.com/edisonAlbaSarmiento/landing-page-in-next/main/src/static/images/Group10.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Content>
  );
}

export default ContentHeader;
