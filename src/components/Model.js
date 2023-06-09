import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Model = ({ onClose, result }) => {
  console.log(result);
  const [status, setStatus] = useState();
  useEffect(() => {
    if ((result * 100 >= 0 && result * 100 < 15) || result * 100 < 0) {
      setStatus(0);
    } else if (result * 100 >= 15 && result * 100 < 45) {
      setStatus(1);
    } else if (result * 100 >= 45 && result * 100 < 65) {
      setStatus(2);
    } else if (result * 100 >= 65) {
      setStatus(3);
    }
  }, [result]);
  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl flex items-center justify-center transition-opacity duration-1000 ani"
    >
      <div className="bg-zinc-600 flex flex-col items-center p-4 md:p-8 rounded-xl opacity-100 transition-opacity duration-1000 ease-in-out">
        <div>
          <h1 className="text-zinc-100 text-xl font-bold font-serif mt-4">
            {Number((result * 100).toFixed(2))} %
          </h1>
        </div>
        <div>
          <h1 className="text-zinc-100 text-xl font-bold font-serif mt-4">
            {status === 0
              ? "Your have no risk of bees absconding the colony"
              : status === 1
              ? "Your have low risk of bees absconding the colony"
              : status === 2
              ? "Your have midrange risk of bees absconding the colony"
              : status === 3 &&
                "Your have high risk of bees absconding the colony"}
          </h1>
        </div>
        {status !== 0 && (
          <div>
            {/* <Link to={`/treatments/${status}`}>
              <h1 className="text-zinc-100 text-xs  font-serif mt-2">
                Medical suggestions and treatments
              </h1>
            </Link> */}
          </div>
        )}
        <div>
          <h1
            onClick={onClose}
            className="text-white text-xs  font-serif mt-8 cursor-pointer"
          >
            Close
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Model;
