import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  image: string;
  userName: string;
  fullName: string;
  onCkick: (id: number) => void;
};
export const UserCard: VFC<Props> = memo((props) => {
  const { id, image, userName, fullName, onCkick } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onCkick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={image}
          alt={userName}
          margin="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="small" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
