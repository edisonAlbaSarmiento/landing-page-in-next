import { FormItem } from 'components/molecules';

function ContenForm(props) {
  const title = props.title;
  console.log('title en organismo', title);
  if (!title) return null;
  return (
    <div>
      <FormItem title={title} />
    </div>
  );
}

export default ContenForm;
