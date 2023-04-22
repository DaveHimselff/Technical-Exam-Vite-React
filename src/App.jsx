import { useState } from "react";
root

export default function todo() {
  const [prep, setprep] = useState([]);
  const [prepnum, setprepnum] = useState({
    num: "",
  });
  const [serving, setserving] = useState([]);

  const handleInputChange = (e) => {
    setprepnum({ ...prepnum, num: e.target.value });
  };

  const handleAddClick = () => {
    if (prepnum.num.trim() !== "") {
      setprep([...prep, prepnum]);
      setprepnum({ num: "" });
    }
  };

  const handleDoneClick = (index) => {
    const itemToMove = prep[index];
    setprep(prep.filter((_, i) => i !== index));
    setserving([...serving, itemToMove]);
  };

  const handleServeDeleteClick = (index) => {
    setserving(serving.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-screen-lg mx-auto my-6 p-4">
      <h1 className="text-3xl font-bold mb-4">Queue</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter a new item..."
          value={prepnum.num}
          onChange={handleInputChange}
          className="mr-2 px-3 py-2 border rounded w-full"
        />
        <button onClick={handleAddClick} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2 pr-4">
          <h2 className="text-lg font-bold mb-4">Now Serving</h2>
          <ul className="border rounded p-2">
            {serving.map((item, index) => (
              <li key={index} className=" justify-between items-center py-1">
                <span>{item.num}</span>
                <button
                  onClick={() => handleServeDeleteClick(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  x 
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-lg font-bold mb-4">Now Preparing</h2>
          <ul className="border rounded p-2">
            {prep.map((item, index) => (
              <li key={index} className=" justify-between items-center py-1">
                <span>{item.num}</span>
                <button
                  onClick={() => handleDoneClick(index)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  ⏎ 
                </button>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
