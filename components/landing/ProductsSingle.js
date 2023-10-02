import Link from "next/link";
import Image from "next/image";
export default function ProductsSingle({ product }) {
  const { name, descripcion, image } = product;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col flex-nowrap justify-center items-center">
      {image && (
        <Image
          className="rounded-t-lg"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      )}

      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
        </Link>
        <p className="my-8 font-normal text-gray-700 dark:text-gray-400 text-justify whitespace-pre-line">
          {descripcion}
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Conoce más del producto
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
