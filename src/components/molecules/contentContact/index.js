import {
  TitleComponet,
  TextFieldComponent,
  ButtonComponent,
} from 'components/atoms';
import { Content, ContentTitle, ContentForm, FormStyle } from './styles';
import PropTypes from 'prop-types';
function ContentContact(props) {
  const { textTitle, subTitle, handleSubmit } = props;

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
      <ContentForm onSubmit={handleSubmit}>
        <FormStyle>
          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />
          <ButtonComponent title={textTitle} />
        </FormStyle>
      </ContentForm>
    </Content>
  );
}

ContentContact.defaultProps = {
  textTitle: '',
  subTitle: '',
  handleSubmit: () => {},
};

ContentContact.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default ContentContact;
