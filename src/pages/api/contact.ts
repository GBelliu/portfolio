import nodemailer from 'nodemailer'
// import {google} from 'googleapis'

// const {OAuth2} = google.auth;

const email = process.env.MAILADRESS;

// const clientId = process.env.CLIENT_ID;

// const clientSecret = process.env.CLIENT_SECRET;
// const refreshToken = process.env.REFRESH_TOKEN;

// const OAuth2_client = new OAuth2(clientId, clientSecret)
// OAuth2_client.setCredentials({refresh_token: refreshToken})

// const accessToken = OAuth2_client.getAccessToken();

let transporter = nodemailer.createTransport({
  service:"gmail",
    auth: {
      user: 'devdomarketing@gmail.com',
      pass: 'CRggg2002',
    }
})

const mailer = ({senderMail, name, text}) => {
  const from = `${name} <${senderMail}>`
  const message = {
    from,
     to: `${email}`,
     subject: `Nova mensagem de contato - ${name}`,
     text: `E-mail: ${senderMail}\n${text}`,
     replyTo: from

  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}
export default async(req, res) => {
  const {senderMail, name, content} = req.body;

  if(senderMail === "" || name === "" || content === "") {
    res.status(403).send()
    return;
  }

  const mailerRes = await mailer({senderMail, name, text: content});
  res.send(mailerRes)

}
