// ReviewForm.tsx

import { FC } from "react";

interface FormProps {
  name_surname: string;
  phone_num: string;
  num_of_training: number;
  setNameSurname: (value: string) => void;
  setPhoneNum: (value: string) => void;
  setNumOfTraining: (value: number) => void;
  handleSubmit: () => void;
}

const ReviewForm: FC<FormProps> = ({
  name_surname,
  phone_num,
  num_of_training,
  setNameSurname,
  setPhoneNum,
  setNumOfTraining,
  handleSubmit,
}) => {
  const openNewWindow = () => {
    const userInfo = {
      name_surname,
      phone_num,
      num_of_training,
    };

    const newWindow = window.open("", "_blank", "width=400,height=400");

    newWindow.document.write(`
      <h2>User Information</h2>
      <p><strong>Name and Surname:</strong> ${userInfo.name_surname}</p>
      <p><strong>Phone Number:</strong> ${userInfo.phone_num}</p>
      <p><strong>Number of Training:</strong> ${userInfo.num_of_training}</p>
    `);
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    if (num_of_training < 0 || num_of_training > 10) {
      alert("Num of training must be between 0 and 10.");
      return;
    }
    handleSubmit();
    openNewWindow(); // Yeni pencereyi aç
  };

  return (
    <form
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={(e) => formSubmit(e)}
    >
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Name and Surname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name_surname"
            type="text"
            placeholder="Name and Surname"
            value={name_surname}
            onChange={(e) => setNameSurname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone_num"
            type="text"
            placeholder="Phone Number"
            value={phone_num}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Number of Training
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="num_of_training"
            type="number"
            placeholder="Number of Training"
            value={num_of_training}
            onChange={(e) => setNumOfTraining(Number(e.target.value))}
            max={10}
            min={0}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
