import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex flex-col gap-6 mt-2">
      <div className="flex flex-wrap gap-4">
      </div>
      <div className="flex justify-center">
        <Link href={'/create'} className="bg-blue-500 text-white rounded p-4 flex justify-center items-center w-52">
          cadastrar
        </Link>
      </div>
    </main>
  )
}
