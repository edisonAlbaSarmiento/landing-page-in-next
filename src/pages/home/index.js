import { HomeTemplate } from 'components/templates';
import {
  AddEventBanner,
  Header,
  CasesSuccess,
  Make,
  Team,
} from 'components/organisms';
import Head from 'next/head';

function Home() {
  const eventDataList = [];
  const handleAddEvent = () => {
    console.log('New Event Added');
  };
  return (
    <>
      <Head>
        <title>Imaginamos || Vivimos para transformar el futuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate
        header={
          <Header
            textTitle="Vivimos para transformar el futuro"
            subTitle="Construyendo ecosistemas digitales de alto impacto."
            textButtom="AGENDAR UNA CITA"
            onClick={() => console.log('click Pages')}
          />
        }
        about={
          <Make
            textTitle="¿Cómo lo hacemos?"
            subTitle="Siendo una compañía centrada en Innovación Disruptiva, nos definimos como un equipo emprendedor e interdisciplinar que presta una solución 360º que lleva los KPI's de tu negocio a nuevos horizontes."
          />
        }
        informationPage={<CasesSuccess />}
        team={
          <Team
            textTitle="Nuestro equipo de emprendedores"
            subTitle="El 60% del éxito para cualquier negocio o proyecto es el equipo. Por esto, nos rodeamos de grandes emprendedores que nos ayudan hacer posible nuestra visión."
          />
        }
        casesStudy={<AddEventBanner validate onSubmit={handleAddEvent} />}
        contact={<AddEventBanner validate onSubmit={handleAddEvent} />}
        footer={<AddEventBanner validate onSubmit={handleAddEvent} />}
      />
    </>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
