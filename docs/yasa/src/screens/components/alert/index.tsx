import { Alert } from "@yasa/alert";
import { IoIosWarning } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";

export function AlertScreen() {
  return (
    <>
      <h1>Alert</h1>
      <h2>Usage</h2>
      <div>
        <h2>Variants</h2>
        <p>
          There are 5 variants: <code>primary</code>, <code>success</code>,{" "}
          <code>danger</code>, <code>warning</code> <code>neutral</code>
        </p>
      </div>
      <Alert
        size="md"
        variant="primary"
        icon={<FaRegThumbsUp />}
        headline="You're awesome!"
        description="This is a primary alert"
      />
      <Alert
        size="md"
        variant="success"
        icon={<MdAttachMoney />}
        headline="Money something"
        description="This is a success alert"
      />
      <Alert
        size="md"
        variant="warning"
        icon={<IoIosWarning />}
        headline="Watch out!"
        description="This is a warning alert"
      />
      <Alert
        size="md"
        variant="danger"
        icon={<AiOutlineDelete />}
        headline="Ayo! you shouldn't do that!"
        description="This is a danger alert"
      />
      <Alert
        size="md"
        variant="neutral"
        icon={<BiMessageSquareDots />}
        headline="Boring alert"
        description="This is a neutral alert"
      />
      <div>
        <h2>Sizes</h2>
        <p>
          There are 3 sizes: <code>sm</code>, <code>md</code>, <code>lg</code>
        </p>
      </div>
      <Alert
        size="sm"
        variant="primary"
        icon={<FaRegThumbsUp />}
        headline="You're awesome!"
        description="This is a small alert"
      />
      <Alert
        size="md"
        variant="primary"
        icon={<FaRegThumbsUp />}
        headline="You're awesome!"
        description="This is a medium alert"
      />
      <Alert
        size="lg"
        variant="primary"
        icon={<FaRegThumbsUp />}
        headline="You're awesome!"
        description="This is a large alert"
      />
      <div>
        <h2>Customization</h2>
        <p>
          Each alert takes a <code>headline</code>, <code>description</code>,
          and an <code>icon</code>.
          <br />
          But they are optional, you can pass <code>children</code> instead.
        </p>
      </div>
      <Alert size="lg" variant="primary" icon={<FaRegThumbsUp />}>
        <span className="fs-l fw-bold">
          I'm a custom, I can do whatever I want.
        </span>
        <hr className="my-10" />
        <p className="fs-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          exercitationem impedit quod accusantium? Quae, aliquam corporis
          assumenda exercitationem illum voluptas et! Fugiat, inventore nisi.
          Iste facere voluptate neque delectus accusamus.
        </p>
      </Alert>
    </>
  );
}
