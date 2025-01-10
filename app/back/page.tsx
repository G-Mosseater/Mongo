"use server";
import EditGreeting from "@/app/components/editGreeting";

type Greeting = {
  greeting: string;
  _id: string;
  greet: string;
};
export default async function Back() {

  const baseUrl = "https://backe-nd.vercel.app";
  const response = await fetch(`${baseUrl}/api`);
  const greetings: Greeting[] = await response.json();

  return (
    <div className="  flex flex-col px-2 gap-1">
      {greetings.map((greetingObj) => (
        <EditGreeting
          greetingObj={greetingObj}
          key={greetingObj._id.toString()}
        />
      ))}
    </div>
  );
}

// <div>
// {greetings.map((greetingObj) => <Delete greetingObj={greetingObj}  key={greetingObj._id.toString()}/>)}
// </div>
