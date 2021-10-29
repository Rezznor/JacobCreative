import nodemailer from 'nodemailer'

export default async (req, res) => {
    
    const mailAcc = process.env.NEXT_PUBLIC_NOREPLY_EMAIL
    
    const mailData = {
        from: mailAcc,
        to: 'hello@jacobcreative.ca',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "mail.jacobcreative.ca",
        auth: {
            user: mailAcc,
            pass: process.env.NEXT_PUBLIC_NOREPLY_EMAIL_PASS
        },
        secure: true,
    })
    
    try {
        await transporter.sendMail(mailData)
        return res.status(200).json({ error: '' })
        
    } catch(error) {
        return res.status(500).json({ error: error.message || error.toString() })
    }
   
}