import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  function handleClick() {
    console.log("event on button happened.");
  }

  return (
    <div>
      <div>
        <Button className="mb-5">
          <GoCloudDownload />
          Plain
        </Button>
      </div>
      <div>
        <Button className="mb-5" primary rounded outline onClick={handleClick}>
          <GoCloudDownload /> Primary
        </Button>
      </div>
      <div>
        <Button className="mb-5" secondary>
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button className="mb-5" outline danger>
          <GoDatabase />
          Danger
        </Button>
      </div>
      <div>
        <Button className="mb-5" success>
          <GoBell />
          Success
        </Button>
      </div>
      <div>
        <Button className="mb-5" warning rounded>
          <GoBell />
          Warning
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
