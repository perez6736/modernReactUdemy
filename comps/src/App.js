import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  function handleClick() {
    console.log("event on button happened.");
  }

  return (
    <div>
      <div>
        <Button>
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
        <Button secondary>
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button outline danger>
          <GoDatabase />
          Danger
        </Button>
      </div>
      <div>
        <Button success>
          <GoBell />
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoBell />
          Warning
        </Button>
      </div>
    </div>
  );
}

export default App;
