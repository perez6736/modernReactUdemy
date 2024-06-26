import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div> Error loading albums </div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums By {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleClick}>
          + Add Album{" "}
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumsList;
