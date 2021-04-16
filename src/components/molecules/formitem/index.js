import { ButtonComponent, TextFieldComponent } from 'components/atoms';

function FormItem(props) {
  const { title } = props;
  console.log('title ORGa', title);
  if (!title) return null;
  return (
    <div>
      <TextFieldComponent label="Test" value="hola" required />
      <ButtonComponent title={title} />
    </div>
  );
}

export default FormItem;
