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
            label="Email"
            name="email"
            value={formikForm.values.email}
            onChange={formikForm.handleChange}
            error={formikForm.touched.email && Boolean(formikForm.errors.email)}
            errorMessage={formikForm.touched.email && formikForm.errors.email}
          />

          <TextFieldComponent
            label="Password"
            name="password"
            value={formikForm.values.password}
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
            label="Email"
            name="email"
            value={formikForm.values.email}
            onChange={formikForm.handleChange}
            error={formikForm.touched.email && Boolean(formikForm.errors.email)}
            errorMessage={formikForm.touched.email && formikForm.errors.email}
          />

          <TextFieldComponent
            label="Password"
            name="password"
            value={formikForm.values.password}
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
            label="Email"
            name="email"
            value={formikForm.values.email}
            onChange={formikForm.handleChange}
            error={formikForm.touched.email && Boolean(formikForm.errors.email)}
            errorMessage={formikForm.touched.email && formikForm.errors.email}
          />

          <TextFieldComponent
            label="Password"
            name="password"
            value={formikForm.values.password}
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
