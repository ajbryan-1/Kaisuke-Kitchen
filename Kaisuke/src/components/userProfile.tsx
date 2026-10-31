export interface User {
  id: number;
  name: string;
  role: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
      {/* Avatar placeholder  */}
      <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">
        {user.name.charAt(0)}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;