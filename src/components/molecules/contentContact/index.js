import { Content, ContentTitle } from './styles';
import { TitleComponet } from 'components/atoms';
import PropTypes from 'prop-types';

function ContentContact(props) {
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
    </Content>
  );
}

ContentContact.defaultProps = {
  textTitle: '',
  subTitle: '',
};

ContentContact.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ContentContact;
