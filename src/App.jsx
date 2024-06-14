import { useEffect, useState } from 'react';
import logo from './assets/SpaceX-Logo.svg'
import { Heading, Image } from '@chakra-ui/react'
import { LaunchItem } from './components/LaunchItem';
import * as API from './utils/functions';



export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} alt="SpaceXIcon" m="4" width={300} />
      <Heading as="h1" size="lg" m="4">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section >
    </>
  );
}