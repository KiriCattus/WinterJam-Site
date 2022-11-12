import Image from "next/image";
import React from "react";

interface Props {
  icicles?: boolean;
}

export function Title({ icicles = true }: Props) {
  return (
  <div id="imgcontainer">
    <Image className="center" width={2049} height={525} src="/Winter_Jam.png" alt="WinterJam Logo"/>
  </div>
  );
}
