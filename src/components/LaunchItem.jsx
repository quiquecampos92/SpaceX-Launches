import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react'
import { HiCalendar } from "react-icons/hi";
import { Link } from 'react-router-dom';

export function LaunchItem(launch) {
    return (
        <Box bg="gray.100" p="4" m="4" borderRadius="lg">
            <Flex display="flex">
                <Text fontSize="2xl">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p="2" colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                </Tag>
            </Flex>
            <Flex align="center">
                <Icon as={HiCalendar} color="gray.500" />
                <Text fontSize="sm" ml={1} color="gray.500">
                    {new Date(launch.launch_date_local,).toLocaleDateString()}
                </Text>
            </Flex>
            <Link to={`/launch/${launch.flight_number}`} >
                <Button mt={2} colorScheme="purple">
                    More Details
                </Button>
            </Link >
        </Box >
    );
}