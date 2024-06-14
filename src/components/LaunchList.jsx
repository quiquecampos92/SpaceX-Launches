import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from '../utils/functions';
import { LaunchItem } from './LaunchItem';

export function LaunchList() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches);
    }, []);

    return (
        <>
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