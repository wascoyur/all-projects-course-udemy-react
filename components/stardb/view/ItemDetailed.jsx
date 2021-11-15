import React from "react";
import Image from "next/image";

const ItemDetailed = ({ activeItem }) => {
  return (
    <div className="card bg-secondary">
      <Image src="/event-default.png" alt="?" width={100} height={100} />
      <div className="card-body bg-secondary">
        <div className="list-group-flush ">
          <div className="list-group-item bg-secondary">cardd caption</div>
          <div className="list-group-item bg-secondary">afdsvbtgr</div>
          <div className="list-group-item bg-secondary">afdsvbtgr</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailed;
