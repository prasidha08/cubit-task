"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex h-[100vh] w-full justify-center items-center">
      <div className="flex flex-col">
        <h1>Something went wrong!</h1>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className=" bg-transparent hover:bg-blue text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
