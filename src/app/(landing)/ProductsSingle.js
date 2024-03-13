import Link from "next/link";
import Image from "next/image";
export default function ProductsSingle({ product }) {
  const { name, descripcion, image, url, schema } = product;
  return (
    <section className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col flex-nowrap justify-center items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
        <Link href={url}>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </div>
        </Link>
        <p className="my-8 font-normal text-gray-700 dark:text-gray-400 text-justify whitespace-pre-line">
          {descripcion}
        </p>
        <Link
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 "
        >
          Conoce más de {name}
        </Link>
      </div>
    </section>
  );
}
