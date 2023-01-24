import { Box, Flex, Heading, Text, Badge } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
export default function About() {
  return (
    <Flex
      id="About"
      sx={{
        backgroundColor: "#b2eee6",
        alignItems: "flex-start",
        flexFlow: ["column nowrap", "row wrap"],
        borderRadius: ["0", "0% 100% 0% 100% / 69% 0% 100% 31% "],
      }}
      p={2}
    >
      <Heading
        as="h1"
        pl={[1, 3]}
        sx={{
          color: "#385a7c",
          fontSize: "60px",
          position: ["relative", "sticky"],
          top: "50%",
          flex: 1,
        }}
      >
        About me!
      </Heading>
      <Box ml={[1, 4]} sx={{ flex: 1 }} mr={2} pr={3}>
        <Flex
          mt={2}
          mb={2}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg"
            height={100}
            width={70}
            alt="orozcorp logo"
            style={{ maxWidth: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={rgbDataURL(178, 238, 230)}
          />
          <Heading as="h2" sx={{ color: "#385a7c" }} mt={3}>
            Eduardo Orozco Mendoza
          </Heading>
        </Flex>
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
          mb={2}
        >
          <Badge m={1}>Entrepreneur</Badge>
          <Badge m={1}>Perseverant</Badge>
          <Badge m={1}>Optimistic</Badge>
          <Badge m={1}>Full-Stack Developer</Badge>
          <Badge m={1}>Gentle parent</Badge>
        </Flex>
        <Box mt={2} mb={2}>
          <Heading as="h3" sx={{ color: "#385a7c" }}>
            Profile
          </Heading>
          <Text>
            Chief Operating Officer with a demonstrated history of working in
            the consumer services industry. Skilled in Operations Management,
            Full-Stack Development, Data Analytics, Project Management, and
            Business Development. Strong operations professional with a
            Bachelor's degree focused in Entrepreneurship/Entrepreneurial
            Studies from ITESM CSF.
          </Text>
        </Box>
        <Box mt={2} mb={3}>
          <Heading as="h3" sx={{ color: "#385a7c" }} mb={3}>
            Experience
          </Heading>
          <Box mt={2} mb={2}>
            <Heading as="h4">
              Chief Operational Officer - Ormen World Wide — Jan 2012 to present
            </Heading>
            <Text>
              After graduating from college, I wanted to pay my father back for
              all those years of hard work. So I started working with him, in a
              new clothing company. I started out as a simple storage boy, and
              then, I started moving up the chain, going through every single
              position available. I learned how the company worked through and
              through, every single detail, from accessory storage capabilities
              up to managing the entire production line and finances. I
              personally coordinate a team of 20 suppliers and 10 staff members.
              On top of all that, I got tired of using the same ERP system. It
              was simply not built for the kind of operations we needed. So I
              decided to create one from scratch. We started from the production
              point of view, where we could start consolidating all the
              supplies, and fabrics, then coordinating the suppliers, and the
              production process. Then we started migrating the POS system and
              finally the CRM. After 5 years of continuous work, I can say this
              is one of my top achievments.
            </Text>
          </Box>
          <Box mt={2} mb={2}>
            <Heading as="h4">
              Co-Founder - Club AC adiestramiento canino -Jan 2019 - present
            </Heading>
            <Text>
              My brother, one of the top dog trainers in México, suddenly lost
              his job. There was only one alternative...to start a venture
              together. I invested 20,000usd to create the best dog training
              facilities in México. I currently check the finances, and update a
              custom-made ERP. This ERP, is for booking a spot in the dog
              training sessions, track payments, check memberships, update dog
              status, add courses, and update dog status.
            </Text>
          </Box>
          <Box mt={2} mb={2}>
            <Heading as="h4">
              Full Stack Developer - Gym Juice Yoga - June 2019 - present
            </Heading>
            <Text>
              Gym Juice Yoga, a gym dedicated to top athletes from all over
              México was in need of an entire ERP system. We worked together to
              develop a web app, where admins could manage memberships, take
              attendance, track athlete progress, track payments. In one point
              in the pandemic, it had an integration with Vimeo for online
              events. It was also linked to Stripe to manage recurrent payments.
              This project initially started with Meteor JS, Blaze, Node and
              Mongo. As I grew as a developer we migrated to React JS, Next JS ,
              Apollo, Graph QL, and Mongo. Right now we are waiting for the
              designer to deliver the landing page.
            </Text>
          </Box>
          <Box mt={2} mb={2}>
            <Heading as="h4">
              Full Stack Developer - Kumbhaka Coyoacan - January 2018 - present
            </Heading>
            <Text>
              Kumbhaka, one of the best yoga studios in México city, needed an
              entire ERP system. So I created from scratch their platform. They
              can create classes, take attendance, users can register to
              specific classes, handle memberships, payments, reports, and in
              one point in time a Stripe integration. This project initially
              started with Meteor JS, Blaze, Node and Mongo. As I grew as a
              developer we migrated to React JS, Next JS , Apollo, Graph QL, and
              Mongo. Right now we are waiting for the designer to deliver the
              landing page.
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
