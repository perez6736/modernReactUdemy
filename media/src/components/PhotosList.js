import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Skeleton from "./skeleton";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPHotoResults] = useAddPhotosMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div> there is an error.</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-rrow items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPHotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-4 flex felx-row flex-wrap justify-left">{content}</div>
    </div>
  );
}
export default PhotosList;
