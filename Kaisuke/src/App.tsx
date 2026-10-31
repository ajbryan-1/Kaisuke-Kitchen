import './App.css'
import Button from './components/button';
import Card from './components/card';
import UserProfile from './components/userProfile';
import type { User } from './components/userProfile';

const users: User[] = [
  { id: 1, name: "Aj Bryan Makiling", role: "Frontend Developer" },
  { id: 2, name: "Eunice Panganiban", role: "UI Designer " },
  { id: 3, name: "Maria Makiling", role: "Backend Developer" }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-12">
      
      {/* Exercise 1: Reusable Buttons */}
      <section>
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">1. Reusable Buttons</h1>
        <div className="flex gap-4">
          <Button text="Submit" />
          <Button text="Delete" color="bg-red-500 hover:bg-red-600" />
          <Button text="Confirm" color="bg-green-500 hover:bg-green-600" />
           <Button text="Add" color="bg-yellow-500 hover:bg-yellow-600" />
        </div>
      </section>

      {/* Exercise 2: Reusable Cards */}
      <section>
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">2. Reusable Cards</h1>
        <div className="flex flex-wrap gap-6">
          <Card 
            title="Frontend Development" 
            description="The practice of building the user-facing, client-side portion of websites and web applications that users directly see and interact with in their browser." 
          />
          <Card 
            title="Backend Development" 
            description="The server-side part of web and app development that handles data storage, server logic, and communication behind the scenes." 
          />
          <Card
            title="UI/UX Design" 
            description="The process of creating visually appealing and user-friendly interfaces for digital products." 
          />  
        </div>
      </section>

      {/* Exercise 3: Reusable User Profiles */}
      <section>
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">3. Reusable User Profiles</h1>
        <div className="flex flex-col gap-4 max-w-md">
          {users.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;