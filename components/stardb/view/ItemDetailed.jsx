import React from "react";
import Image from "next/image";

const ItemDetailed = () => {
  return (
    <div className="col">
      <div className="card">
        <Image src="/event-default.png" alt="?" width={100} height={100} />
        <div className="card-body ">
          <div className="list-group-flush">
            <div className="list-group-item">cardd caption</div>
            <div className="list-group-item">afdsvbtgr</div>
            <div className="list-group-item">afdsvbtgr</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailed;
