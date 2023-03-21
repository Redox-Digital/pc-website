import nodemailer from 'nodemailer';

export default function handler(req: any, res: any) {
  // Get data submitted in request's body.
  const body = req.body
  const recipient = 'mettrauxsteve@gmail.com'

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)
  // let parse = JSON.parse(JSON.stringify(body));
  // console.log('parse: ', parse)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  let message = {
    from: `${body.email}`,
    to: recipient,
    subject: `Formulaire de contact, message de ${body.first} ${body.last}`,
    text: `Type de contact: ${body.type}
            Société: ${body.society}
            Message: ${body.message}
            Téléphone: ${body.phone}`
  }
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json(message)

  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'windows',
    path: '/usr/sbin/sendmail'
  });
  transporter.sendMail({
    from: `${body.email}`,
    to: recipient,
    subject: `Formulaire de contact, message de ${body.first} ${body.last}`,
    text: `Type de contact: ${body.type}
            Société: ${body.society}
            Message: ${body.message}
            Téléphone: ${body.phone}`
  });

}