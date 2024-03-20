import clsx from "clsx";

export default function Home() {
  const buttonStyle =
    "px-4 py-2 rounded hover:shadow-lg active:shadow-none transition-all duration-300 text-white max-w-md w-full";

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10">
      <div className="flex flex-col items-center justify-center space-y-4 p-5 border border-gray-200 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold">Add Notifications</h1>
        <button
          className={clsx(buttonStyle, "bg-blue-500")}
          // onClick={handleNotification}
          data-type="INFO"
        >
          Info
        </button>
        <button
          className={clsx(buttonStyle, "bg-green-500")}
          // onClick={handleNotification}
          data-type="SUCCESS"
        >
          Success
        </button>
        <button
          className={clsx(buttonStyle, "bg-red-500")}
          // onClick={handleNotification}
          data-type="ERROR"
        >
          Error
        </button>
        <button
          className={clsx(buttonStyle, "bg-yellow-500")}
          // onClick={handleNotification}
          data-type="WARNING"
        >
          Warning
        </button>
      </div>
    </main>
  );
}
