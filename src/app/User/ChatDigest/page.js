import { getContacts } from "../../../server/userInteraction";
import GenerateInfo from "./GenerateInfo";
export default async function Page({}) {
  const contactData = await getContacts();
  const contacts = contactData?.map((contact) => ({
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
