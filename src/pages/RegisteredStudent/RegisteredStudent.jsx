import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataContext } from "../../context";
import RegisteredSupport from "./RegisteredSupport";

const RegisteredStudent = () => {
  const { getResisteredStudentAll, registeredStudent } =
    useContext(DataContext);
  const [isRegisteredDate, setIsRegisteredDate] = useState(true);
  const [filteredRegisteredStudent, setFilteredRegisterStudent] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (date) => {
    setIsRegisteredDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = registeredStudent?.filter((product) => {
      let productDate = new Date(product?.ConvertedDateTime);

      if (date.selection.endDate == date.selection.startDate) {
        productDate.setHours(0, 0, 0, 0);
        return productDate.getTime() === date.selection.startDate.getTime();
      } else if (date.selection.startDate && date.selection.endDate) {
        return (
          productDate <= date.selection.endDate &&
          productDate >= date.selection.startDate
        );
      } else if (date.selection.endDate != date.selection.startDate) {
        return (
          productDate >= date.selection.startDate &&
          productDate <= date.selection.endDate
        );
      }
    });
    setFilteredRegisterStudent(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    getResisteredStudentAll();
  }, []);

  return (
    <>
      <div className="m-4">
        <h1 className="text-center text-xl font-bold">student Schedule</h1>
      </div>

      <div className="text-center">
        <div className="border-black rounded">
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
      </div>
      <div className="text-center my-4">
        <button
          type="button"
          onClick={() => {
            setIsRegisteredDate(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Show all data
        </button>
      </div>

      <div className="m-8">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 border border-black">
              <th className="px-4 py-2 border border-black">S.No</th>
              <th className="px-4 py-2 border border-black">Details</th>
              <th className="px-4 py-2 border border-black">More Details</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isRegisteredDate ? registeredStudent?.map((student, index) => (
                  <RegisteredSupport
                    student={student}
                    index={index}
                    key={index}
                  />
                ))
              : filteredRegisteredStudent?.map((student, index) => (
                  <RegisteredSupport
                    student={student}
                    index={index}
                    key={index}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RegisteredStudent;
