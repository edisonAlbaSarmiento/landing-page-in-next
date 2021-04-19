import { ContactTemplate } from 'components/templates';
import { ContenForm, AddEventBanner } from 'components/organisms';

// import { fetchEventData } from 'services/EventDataService';

const DummyView = () => (
  <div style={{ backgroundColor: '#adadad', height: '100vh' }}>
    <h1>
      Welcome to{' '}
      {/* <Link href={`/contact`}>
        <a>Contact</a>{' '}
      </Link>{' '} */}
    </h1>
  </div>
);

const Home = () => {
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
    <ContactTemplate
      sideNav={<DummyView />}
      banner={
        <AddEventBanner
          date={
            eventDataList.length > 0
              ? eventDataList[0].date
              : '12:12:12 12/12/12'
          }
          title={
            eventDataList.length > 0
              ? eventDataList[0].title
              : 'torybook Event 102'
          }
          description={
            eventDataList.length > 0
              ? eventDataList[0].description
              : 'Event description 10'
          }
          type={eventDataList.length > 0 ? eventDataList[0].type : 'Reminder'}
          onSubmit={handleAddEvent}
        />
      }
      rightPanel={
        <ContenForm title="Upcoming Event" eventDataList={eventDataList} />
      }
      content={<AddEventBanner validate onSubmit={handleAddEvent} />}
    />
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
