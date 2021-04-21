import { ContentOrganism } from './styles';
// import { useRouter } from 'next/router';
import { ContentHeader } from '../../molecules';

export default function Header() {
  return (
    <ContentOrganism>
      {/* <Link href="/">Home</Link>
      <Link href="/about-us">About</Link> */}
      <ContentHeader
        textTitle="Vivimos para transformar el futuro"
        subTitle="Construyendo ecosistemas digitales de alto impacto."
        textButtom="AGENDAR UNA CITA"
        onClick={() => console.log('click orgnismo')}
      />
    </ContentOrganism>
  );
}

// const Link = ({ children, href }) => {
//   const router = useRouter();
//   return (
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault();
//         // typically you want to use `next/link` for this usecase
//         // but this example shows how you can also access the router
//         // and use it manually
//         router.push(href);
//       }}
//     >
//       {children}
//       <style jsx>{`
//         a {
//           margin-right: 10px;
//         }
//       `}</style>
//     </a>
//   );
// };
