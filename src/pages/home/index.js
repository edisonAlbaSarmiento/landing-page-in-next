import { HomeTemplate } from 'components/templates';
import {
  AddEventBanner,
  Header,
  CasesSuccess,
  Make,
  Team,
  Footer,
  About,
} from 'components/organisms';
import Head from 'next/head';
import dataCarrusel from '../../utils/dataCarrusel';

function Home() {
  // const eventDataList = [];
  const handleAddEvent = () => {
    console.log('New Event Added');
  };

  const handleSubmitdata = (values) => {
    console.lo('VALUES ', values);
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
            dataCarrusel={dataCarrusel[0].informationBunnises}
          />
        }
        informationPage={<CasesSuccess />}
        team={
          <Team
            textTitle="Nuestro equipo de emprendedores"
            subTitle="El 60% del éxito para cualquier negocio o proyecto es el equipo. Por esto, nos rodeamos de grandes emprendedores que nos ayudan hacer posible nuestra visión."
            dataCarrusel={dataCarrusel[0].informationTeam}
          />
        }
        casesStudy={<AddEventBanner validate onSubmit={handleAddEvent} />}
        contact={
          <About
            textTitle="Hola."
            subTitle="Estamos acá para ayudarte."
            handleSubmit={handleSubmitdata}
          />
        }
        footer={<Footer textTitle="¿Cómo lo hacemos?" />}
      />
    </>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
