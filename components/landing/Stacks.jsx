import { Box, Flex, Heading, Text } from "@theme-ui/components";
import useWindowSize from "../hooks/useWindowSize";
export default function Stacks() {
  return (
    <Flex
      sx={{
        backgroundColor: "#b2eee6",
        alignItems: "flex-start",
        flexFlow: ["column nowrap", "row wrap"],
        borderRadius: ["0%", "0% 100% 0% 100% / 100% 25% 75% 0% "],
      }}
      p={2}
      pb={5}
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
        Stacks and Skills
      </Heading>
      <Box mt={4} ml={[1, 4]} sx={{ flex: 1 }}>
        <Heading as="h2" sx={{ color: "#385a7c" }}>
          Eduardo Orozco Mendoza
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur odio sed aliquet lacinia. Nam non tempor justo. Curabitur
          tempus sagittis nisi in dapibus. Sed interdum ultrices laoreet. Duis
          fermentum turpis nunc, eget rutrum libero consectetur non. Cras
          lacinia, nisl eu eleifend volutpat, erat quam maximus nisi, et ornare
          enim libero id dui. Donec mollis magna ac leo volutpat, eget elementum
          eros rhoncus. In ornare venenatis pulvinar. Maecenas urna dui, rutrum
          sed condimentum sit amet, laoreet nec ligula. Donec vel pretium lacus.
          Nullam efficitur leo mollis, pellentesque orci sed, feugiat mi. Duis
          cursus quis ipsum vel pulvinar. Nunc a fermentum nibh, sit amet
          aliquam lectus. Nullam eu vulputate mauris. Aenean felis turpis,
          convallis quis posuere vitae, volutpat in augue. Duis laoreet, est eu
          ullamcorper bibendum, ante augue venenatis dui, consequat pharetra
          massa orci sit amet justo. Suspendisse blandit dolor id orci commodo
          ultricies. Sed convallis, nisi vel accumsan posuere, ipsum magna
          suscipit eros, sit amet gravida felis nisl ac sapien. Donec accumsan
          sed lacus eu gravida. Sed tincidunt leo eget tempor blandit. Vivamus
          in nibh ut orci facilisis elementum. Fusce euismod pharetra odio, non
          auctor felis fermentum et. Fusce vel luctus sapien. Morbi ac suscipit
          felis, sed ornare turpis. Donec hendrerit arcu ac dui faucibus tempus.
          Nam nec arcu ut mauris consequat commodo et id metus. Curabitur
          commodo enim quam, in imperdiet elit feugiat a. Nunc vulputate
          scelerisque elit at euismod. Nam eget facilisis ipsum. Vivamus vel
          tellus vitae justo consectetur volutpat. Phasellus euismod, erat non
          semper rutrum, justo sapien ullamcorper odio, porttitor eleifend nisi
          velit eu magna. Quisque tempus enim ac sapien rhoncus, vel rutrum eros
          dapibus. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Suspendisse nec ornare sapien.
          Praesent arcu elit, ornare a ante et, lacinia venenatis leo. Etiam
          tempus nisl leo, ut suscipit felis vehicula non. Fusce in leo eu
          tellus commodo accumsan. Nulla eleifend scelerisque quam, vitae
          egestas purus viverra sed. Pellentesque semper elementum nulla nec
          ullamcorper. Phasellus eleifend et lorem ac dapibus. Nulla blandit
          velit nec augue consectetur, id rutrum nunc egestas. Aliquam erat
          volutpat. Donec laoreet nisi nec felis tincidunt, eu vulputate quam
          accumsan. Fusce suscipit viverra suscipit. Suspendisse tincidunt
          ullamcorper odio sed fringilla. Nullam interdum, lorem vel accumsan
          lacinia, enim enim condimentum enim, sed ornare enim mi vel mauris.
          Duis quis consequat eros. Curabitur pulvinar consequat vehicula. Sed
          ipsum velit, cursus ut nulla sit amet, bibendum posuere enim.
        </Text>
      </Box>
    </Flex>
  );
}
