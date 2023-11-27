import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (() => {
        setShowModal(true);
    });

    const handleClose = (() => {
        setShowModal(false);
    });

    const actionBar = <div>
        <Button onClick={handleClose} primary>Accept</Button>
    </div>

    const modal  = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Content of the Modal!.
        </p>
    </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            { showModal && modal}

            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
            <p>
                Curabitur dictum urna mollis, malesuada mi ullamcorper, faucibus sem. Maecenas suscipit, nulla vel vulputate porttitor, nulla augue aliquam eros, ut imperdiet elit nibh ac lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit efficitur porttitor. Fusce in massa non libero finibus rhoncus. Nullam nec ipsum luctus, cursus diam quis, congue nunc. Donec in aliquet mauris. Ut ultrices, enim vitae sagittis aliquet, neque sem maximus enim, vehicula sodales ante urna quis purus. Curabitur nisl augue, sollicitudin a dui in, venenatis cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et accumsan sem. Aliquam eu enim et tortor rhoncus vestibulum. Duis ultrices sapien vitae metus viverra, et ornare metus vehicula. Aliquam vel justo lectus.
            </p>
        </div>
    );
}

export default ModalPage;