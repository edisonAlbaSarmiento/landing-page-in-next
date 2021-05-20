import {
  TitleComponet,
  TextFieldComponent,
  ButtonContact,
} from 'components/atoms';
import { Content, ContentTitle, ContentForm, FormStyle } from './styles';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

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
      <ContentForm>
        <FormStyle onSubmit={formik.handleSubmit}>
          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />

          <TextFieldComponent label="Test" value="hola" required />

          <ButtonContact
            widthButton="100%"
            heightButtom="60px"
            // onClick={onClick}
            backgroundColorButton="transparent"
            color="#FFFFFF"
            borderColor="#7bf5b1"
            title
          >
            Angendar una cita
          </ButtonContact>
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
