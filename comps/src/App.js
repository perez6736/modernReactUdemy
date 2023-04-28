import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button>
          <GoCloudDownload />
          Plain
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
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
