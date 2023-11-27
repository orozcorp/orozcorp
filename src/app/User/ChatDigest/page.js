import { postData } from "../../../lib/helpers/getData";
import GenerateInfo from "./GenerateInfo";
export default async function Page({}) {
  const data = await postData({
    query: `mutation Mutation {
          getContacts {
            id
            name
            number
            pushname
          }
        }`,
  });
  const contacts = data?.getContacts?.map((contact) => ({
    value: contact.id,
    label: contact.name || contact.pushname || contact.number,
  }));
  return (
    <>
      <h1 className="text-2xl mb-4">Genera resumenes de tus conversaciones</h1>
      <GenerateInfo contactos={contacts} />
    </>
  );
}
