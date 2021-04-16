import { ContenForm, AddEventBanner } from 'components/organisms';

function HomeTemplate(props) {
  const test = (params) => {
    console.log('click buttom');
  };
  return (
    <div>
      <h1>TemplateEdison</h1>
      <ContenForm title="Edison acat" />
      <AddEventBanner onSubmit={test} />
    </div>
  );
}

export default HomeTemplate;
