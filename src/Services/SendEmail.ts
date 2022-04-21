import NodeMailer from 'nodemailer'
import smtp from 'nodemailer-smtp-transport'

class SendEmail{

    static Send(){
        var transporter = NodeMailer.createTransport({
            service: 'gmail',
            port: 993,
  host: 'imap.gmail.com',
  servername: 'imap.gmail.com',  // SNI
            secure: false,
            auth: {
                    user: 'dimoreira.dev@gmail.com',   //put your mail here
                    pass: '36871513687151'              //password here
                  },
                  tls: {
                    rejectUnauthorized: false
                  }
         });

         const mailOptions = { 
             
                       from: 'dimoreira.dev@gmail.com',       // sender address
                       to: 'dimoreira.dev@gmail.com',          
                       subject: 'Meeting Reminder',  
                       html: '<p>Teste</p>'// plain text body
         };

         transporter.sendMail(mailOptions, function (err, info) {
            if(err) 
              console.log(err);
            else
              console.log(info);
             });
        
    }
}

export default SendEmail