import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is something important in the modal.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero
        orci, semper vitae urna sit amet, porttitor posuere leo. In faucibus
        metus vel sem tempus, id dignissim erat suscipit. Vestibulum ac
        efficitur ligula. Proin sodales ex nec suscipit vulputate. Ut nec
        feugiat sapien. Etiam venenatis est felis, sed feugiat magna tincidunt
        vel. Fusce rutrum scelerisque sapien. In convallis lectus nec
        scelerisque facilisis. Ut eget nunc fringilla turpis molestie iaculis
        quis in lectus. Donec a hendrerit ex. Duis et ipsum malesuada, fringilla
        metus sit amet, vehicula justo.
      </p>
    </div>
  );
}

export default ModalPage;
