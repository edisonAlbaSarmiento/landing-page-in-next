import {
  TitleComponet,
  TextFieldComponent,
  ButtonContact,
} from 'components/atoms';
import { Content, ContentTitle, ContentForm, FormStyle } from './styles';
import PropTypes from 'prop-types';

function ContentContact(props) {
  const { textTitle, subTitle, handleSubmit, formikForm } = props;

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
        <FormStyle onSubmit={formikForm.handleSubmit}>
          <TextFieldComponent
            label="Nombre Completo"
            name="fullName"
            placeholder={formikForm.values.fullName}
            onChange={formikForm.handleChange}
            error={
              formikForm.touched.fullName && Boolean(formikForm.errors.fullName)
            }
            errorMessage={
              formikForm.touched.fullName && formikForm.errors.fullName
            }
          />

          <TextFieldComponent
            label="Email"
            name="email"
            placeholder={formikForm.values.email}
            onChange={formikForm.handleChange}
            error={formikForm.touched.email && Boolean(formikForm.errors.email)}
            helperText={formikForm.touched.email && formikForm.errors.email}
            errorMessage={formikForm.touched.email && formikForm.errors.email}
          />
          <TextFieldComponent
            label="Telefono"
            name="cellphone"
            placeholder={formikForm.values.cellphone}
            onChange={formikForm.handleChange}
            error={
              formikForm.touched.cellphone &&
              Boolean(formikForm.errors.cellphone)
            }
            errorMessage={
              formikForm.touched.cellphone && formikForm.errors.cellphone
            }
            type="number"
          />

          <TextFieldComponent
            label="Nombre de la organizacion"
            name="nameOrganize"
            placeholder={formikForm.values.nameOrganize}
            onChange={formikForm.handleChange}
            error={
              formikForm.touched.nameOrganize &&
              Boolean(formikForm.errors.nameOrganize)
            }
            helperText={
              formikForm.touched.nameOrganize && formikForm.errors.nameOrganize
            }
            errorMessage={
              formikForm.touched.nameOrganize && formikForm.errors.nameOrganize
            }
          />
          <TextFieldComponent
            label="Select"
            name="password"
            placeholder={formikForm.values.password}
            onChange={formikForm.handleChange}
            error={
              formikForm.touched.password && Boolean(formikForm.errors.password)
            }
            helperText={
              formikForm.touched.password && formikForm.errors.password
            }
            errorMessage={
              formikForm.touched.password && formikForm.errors.password
            }
          />
          <TextFieldComponent
            label="Mensaje"
            name="message"
            placeholder={formikForm.values.message}
            onChange={formikForm.handleChange}
            error={
              formikForm.touched.message && Boolean(formikForm.errors.message)
            }
            errorMessage={
              formikForm.touched.message && formikForm.errors.message
            }
            multiline
          />

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
  formikForm: () => {},
};

ContentContact.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  formikForm: PropTypes.any,
};

export default ContentContact;
