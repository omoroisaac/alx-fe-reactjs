// src/components/UserProfile.jsx
function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-md lg:max-w-lg mx-auto my-10 md:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
        />

        {/* User Info */}
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl text-blue-800 mb-2 transition-colors duration-300 ease-in-out hover:text-blue-500 cursor-pointer">
            John Doe
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Developer at Example Co. Loves to write code and explore new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;