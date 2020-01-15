import React, { useState } from "react";
import { Input } from "@material-ui/core";

const HashTags = () => {
  const [hash, setHash] = useState("");

  return (
    <div>
      <Input value={hash} />
    </div>
  );
};

export default HashTags;
