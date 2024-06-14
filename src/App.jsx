import logo from './assets/SpaceX-Logo.svg'
import { Image } from '@chakra-ui/react'
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';

import { Routes, Route } from "react-router-dom";

export function App() {

  return (
    <>
      <Image src={logo} alt="SpaceXIcon" m="4" width={300} />
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetails />} />
        <Route path='rockets/:rocketId' element={<RocketDetails />} />
      </Routes>

    </>
  );
}