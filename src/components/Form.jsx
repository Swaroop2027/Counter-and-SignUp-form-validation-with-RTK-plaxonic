import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText, resetText } from "../app/form/formSlice";
import Validation from "../Validation";

const Form = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const obj = {};
  const [errors, setErrors] = useState({});

  const handleTextChange = (e) => {
    obj[e.target.name] = e.target.value;
    dispatch(inputText(obj));
  };

  const data = useSelector((state) => {
    return state.forms;
  });

  const handleClick = (e) => {
    e.preventDefault();
    setUsers([...users, data]);
    dispatch(resetText());
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(data));
  };

  useEffect(() => {
    console.log(users);
    localStorage.setItem("CardData", JSON.stringify(users));
  }, [users]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={data.name}
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              {errors.name && !data.name && (
                <p className="text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  id="username"
                  name="username"
                  placeholder="john"
                  type="text"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={data.username}
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              {errors.username && !data.username && (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={data.email}
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={data.password}
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              {errors.password && !data.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={data.password_confirmation}
                  onChange={(e) => handleTextChange(e)}
                />
              </div>
              {errors.password_confirmation && (
                <p className="text-red-600">{errors.password_confirmation}</p>
              )}
            </div>

            {data.name &&
            data.username &&
            data.email &&
            data.password &&
            data.password_confirmation &&
            data.password === data.password_confirmation ? (
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={(e) => handleClick(e)}
                  >
                    Create account
                  </button>
                </span>
              </div>
            ) : (
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={(e) => handleValidation(e)}
                  >
                    Create account
                  </button>
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
