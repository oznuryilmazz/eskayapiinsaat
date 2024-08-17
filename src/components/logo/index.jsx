import { Link } from "react-router-dom";

import { logo } from "../../data/data";

const Logo = () => {
  return (
    <Link to="../">
      <img
        src={logo.logo}
        alt={logo.companyName}
        width={100}
        style={{ marginTop: 16 }}
      />
    </Link>
  );
};

export default Logo;
