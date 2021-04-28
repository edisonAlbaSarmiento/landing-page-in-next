import { Content, ContentTitle, ContainerIcon } from './styles';
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

function ContentMake(props) {
  const { textTitle, subTitle } = props;
  return (
    <Content>
      <ContentTitle>
        <TitleComponet variant="title" marginText="inherit" color="#ffff">
          {textTitle}
        </TitleComponet>
        <TitleComponet
          variant="subtitle"
          color="#ffff"
          fontSize="25px"
          marginText="20px 0px 40.5px"
        >
          {subTitle}
        </TitleComponet>
      </ContentTitle>

      {/* <img
        src="https://raw.githubusercontent.com/CristianPaez/ImageEmp/master/ImagesGenerals/Group9.jpeg"
        alt="Background Imagen de Card informacion"
        title="Background Imagen de Card informacion"
      ></img> */}
    </Content>
  );
}

ContentMake.defaultProps = {
  textTitle: '',
  subTitle: '',
};

ContentMake.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ContentMake;
