"use client";

type Props = {
  greetingObj: {
    _id: string;
    greeting: string;
  };
};

export default function Delete({ greetingObj }: Props) {
//   const [deleted, setDeleted] = useState(false);

  const deleteGreet = () => {
    fetch("/api", {
      method: "DELETE",
      body: JSON.stringify( greetingObj)
    });
    // setDeleted(true);
  };

  return <button   className="className= text-white bg-red-600 rounded-md active:bg-red-700  hover:bg-red-500 h-8 px-2 text-[12px]"
  onClick={deleteGreet}>Delete</button>;
}
