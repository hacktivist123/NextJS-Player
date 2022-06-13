import { Box, List, ListItem, LinkOverlay, LinkBox } from "@chakra-ui/layout";
import NextLink from "next/link";

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const PlaylistMenu = () => {
  return (
    <Box height="66%" overflowY="auto" paddingY="20px">
      <List spacing={3}>
        {playlists.map((playlist) => (
          <ListItem paddingX="20px" key={playlist}>
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay>{playlist}</LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PlaylistMenu;
