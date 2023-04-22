import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const nodemailerMailgun = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.EMAIL_API,
      domain: process.env.DOMAIN,
    },
  })
);

export default async function handler(NextApiRequest, NextApiResponse) {
  if (NextApiRequest.method === "POST") {
    try {
      const { authorization } = NextApiRequest.headers;
      if (authorization === `Bearer ${process.env.CRON_KEY}`) {
        const { db } = await connectToDatabase();
        const menosDeunMes = moment().add(1, "month").startOf("day").toDate();
        const menosDeQuinceDias = moment()
          .add(15, "days")
          .startOf("day")
          .toDate();
        try {
          const allUsers = await db
            .collection("users")
            .find(
              {
                "profile.fechaVencimientoSeguro": {
                  $lte: new Date(menosDeunMes),
                  $gte: new Date(menosDeQuinceDias),
                },
              },
              {
                projection: {
                  email: 1,
                  "profile.name": 1,
                  "profile.lastName": 1,
                  "profile.fechaVencimientoSeguro": 1,
                },
              }
            )
            .toArray();
          for (const user of allUsers) {
            await nodemailerMailgun.sendMail({
              from: process.env.EMAIL_FROM,
              to: user.email,
              subject: `Tu seguro de ${user.profile.name} ${user.profile.lastName} está por vencer`,
              text: "Estimado cliente,\n\nEsperamos que te encuentres bien. Nos ponemos en contacto contigo para recordarte que tu seguro vence en un mes. Es importante que actualices tu póliza para seguir disfrutando de la tranquilidad y protección que ofrece nuestro seguro.\n\nPara renovar tu póliza, por favor visita nuestra plataforma en línea: https://orozcorp.live\n\nSi tienes alguna pregunta o necesitas ayuda con el proceso de renovación, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estaremos encantados de atenderte y resolver cualquier duda que puedas tener.\n\nGracias por confiar en nosotros para proteger lo que más te importa. Esperamos seguir siendo tu elección en seguros y seguir brindándote el mejor servicio posible.\n\nAtentamente,\n\nEl equipo de OrozCorp",
              html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Recordatorio: Tu seguro vence en un mes</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    font-size: 16px;
                                    line-height: 1.5;
                                }
                                p {
                                    margin-bottom: 1em;
                                }
                            </style>
                        </head>
                        <body>
                            <p>Estimado cliente,</p>
                            <p>Esperamos que te encuentres bien. Nos ponemos en contacto contigo para recordarte que tu seguro vence en un mes. Es importante que actualices tu póliza para seguir disfrutando de la tranquilidad y protección que ofrece un seguro.</p>

                        <p>Para actualizar tu póliza, por favor visita nuestra plataforma en línea: <a href="https://orozcorp.live">https://orozcorp.live</a></p>

                        <p>Si tienes alguna pregunta o necesitas ayuda con el proceso de renovación, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estaremos encantados de atenderte y resolver cualquier duda que puedas tener.</p>

                        <p>Gracias por confiar en nosotros para proteger lo que más te importa. Esperamos seguir siendo tu elección en seguros y seguir brindándote el mejor servicio posible.</p>

                        <p>Atentamente,</p>

                        <p>El equipo de OrozCorp</p>
                        </body>
                        </html>
              `,
            });
          }
          return NextApiResponse.status(200).json({ success: true });
        } catch (error) {
          NextApiResponse.status(401).json({ success: false });
        }
      } else {
        NextApiResponse.status(401).json({ success: false });
      }
    } catch (err) {
      NextApiResponse.status(500).json({
        statusCode: 500,
        message: err.message,
      });
    }
  } else {
    NextApiResponse.setHeader("Allow", "POST");
    NextApiResponse.status(405).end("Method Not Allowed");
  }
}
