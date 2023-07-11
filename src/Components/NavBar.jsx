import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function NavBar() {
  const { user } = useContext(UserContext);
  const BASE_URL = process.env.BASE_URL_FRONTEND;

  return (
    <div className="sticky z-20 sm:w-full px-5 md:p-0 lg:p-0 top-0 border-b items-center pb-4 border-gray-300 ">
      <div className="text-white max-w-6xl m-auto flex justify-between items-center pt-10">
        <Link className="flex items-center gap-1" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          <span className="font-bold text-white text-xl">lifesuruvo</span>
        </Link>
        <div className="flex gap-2 mb-3 items-center">
          {!!user && (
            <Link to={"/account/blog/new"} className="flex gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <h3 className="hidden md:block">Create Post</h3>
            </Link>
          )}

          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center border-gray-300 gap-2 rounded-full px-4 py-2">
            {user ? (
              <>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <div className="text-white bg-gray-500 rounded-full border-gray-300 border overflow-hidden">
                  {user.photos?.[0] ? (
                    <div className="border rounded-full">
                      <img
                        src={`${BASE_URL}/userphotos/` + user?.photos?.[0]}
                        alt={user?.name}
                        className="h-10 rounded-full"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="h-12 rounded-full "
                        src={
                          "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                        }
                        alt={user.name}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              // <div className="flex gap-3">
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     fill="none"
              //     viewBox="0 0 24 24"
              //     strokeWidth={1.5}
              //     stroke="currentColor"
              //     className="w-6 h-6">
              //     <path
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //       d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              //     />
              //   </svg>

              //   <h4> Login</h4>
              // </div>
              ""
            )}

            {!!user && <div className="hidden md:block">{user.name}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
