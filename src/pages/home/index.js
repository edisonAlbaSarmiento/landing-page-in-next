import { HomeTemplate } from 'components/templates';
import {
  ContenForm,
  AddEventBanner,
  Header,
  CasesSuccess,
} from 'components/organisms';
import Link from 'next/link';
import Head from 'next/head';

// import { fetchEventData } from 'services/EventDataService';

function DummyView() {
  return (
    <div style={{ backgroundColor: '#adadad', height: '100vh' }}>
      <h1>
        Welcome to{' '}
        <Link href={`/contact`}>
          <a>Contact</a>
        </Link>
        {/* <div>
            <Link href="/"><a> Home </a></Link>
            <Link href="/about"><a> About </a></Link>
        </div> */}
      </h1>
    </div>
  );
}

function Home() {
  const eventDataList = [];

  // const fetchEventList = useCallback(async () => {
  //   const eventData = await fetchEventData();
  //   setEventDataList([...eventData]);
  // }, [setEventDataList]);
  // const handleAddEvent = useCallback((eventData) => {
  //   console.log('New Event Added', eventData);
  // }, []);

  const handleAddEvent = () => {
    console.log('New Event Added');
  };
  // useEffect(() => {
  //   fetchEventList();
  // }, [fetchEventList]);

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
        informationPage={<CasesSuccess />}
        about={
          <ContenForm title="Upcoming Event" eventDataList={eventDataList} />
        }
        casesStudy={<AddEventBanner validate onSubmit={handleAddEvent} />}
        team={<AddEventBanner validate onSubmit={handleAddEvent} />}
        contact={<AddEventBanner validate onSubmit={handleAddEvent} />}
        footer={<AddEventBanner validate onSubmit={handleAddEvent} />}
      />
    </>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
