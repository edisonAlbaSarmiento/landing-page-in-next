// import Head from 'next/head';
// import styles from '../../styles/Home.module.css';
// import Link from 'next/link';
// import { Body, Title } from './styles';
// import { HomeTemplate } from '../../components/templates';

// export default function About() {
//   return (
//     <Body>
//       <div className={styles.container}>
//         <Head>
//           <title>About us </title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <HomeTemplate />
//         <main className={styles.main}>
//           <Title className={styles.title}>
//             Welcome to about <a href="https://nextjs.org">Edi.js!</a>
//           </Title>

//           <h1 className={styles.title}>
//             Welcome to{' '}
//             <Link href={`/contact`}>
//               <a>Contact</a>
//             </Link>
//           </h1>
//           <p className={styles.description}>
//             Get started by editing{' '}
//             <code className={styles.code}>pages/index.js</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h3>Documentation &rarr;</h3>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h3>Learn &rarr;</h3>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/master/examples"
//               className={styles.card}
//             >
//               <h3>Examples &rarr;</h3>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h3>Deploy &rarr;</h3>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//           </a>
//         </footer>
//       </div>
//     </Body>
//   );
// }

import React, { useEffect, useState } from 'react';

import { HomeTemplate } from 'components/templates';
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

const About = () => {
  const [eventDataList, setEventDataList] = useState([]);

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
    <HomeTemplate
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
              : 'torybook Event 10'
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

About.propTypes = {};

About.defaultProps = {};

export default About;
