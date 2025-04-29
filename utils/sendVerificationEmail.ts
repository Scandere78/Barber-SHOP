import { createTransport } from 'nodemailer';

export const sendVerificationEmail = async (email: string, token: string, type: 'email-change' | 'registration') => {
    const transporter = createTransport({
        host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
        port: Number(process.env.EMAIL_SERVER_PORT) || 465,
        auth: {
            user: process.env.MON_MAIL,
            pass: process.env.MON_MDP,
        },
        secure: true,
    });

    const verificationUrl = `${process.env.NEXTAUTH_URL}/account/verif-email?token=${token}&type=${type}`;

    const emailContent = type === 'email-change' 
        ? {
            subject: 'Confirmation de changement d\'email - Emeraude Limousine',
            text: `Bonjour,\n\nPour confirmer votre changement d'adresse email, veuillez cliquer sur le lien suivant :\n${verificationUrl}\n\nSi vous n'avez pas demandé ce changement, veuillez ignorer cet email.\n\nCordialement,\nL'équipe Emeraude Limousine`,
            html: `
                <h1>Confirmation de changement d'email</h1>
                <p>Bonjour,</p>
                <p>Pour confirmer votre changement d'adresse email, veuillez cliquer sur le lien suivant :</p>
                <p><a href="${verificationUrl}">Confirmer mon email</a></p>
                <p>Si vous n'avez pas demandé ce changement, veuillez ignorer cet email.</p>
                <p>Cordialement,<br>L'équipe Emeraude Limousine</p>
            `
        }
        : {
            subject: 'Vérification de votre email - Emeraude Limousine',
            text: `Bienvenue chez Emeraude Limousine !\n\nPour vérifier votre adresse email, veuillez cliquer sur le lien suivant :\n${verificationUrl}\n\nCordialement,\nL'équipe Emeraude Limousine`,
            html: `
                <h1>Vérification de votre email</h1>
                <p>Bienvenue chez Emeraude Limousine !</p>
                <p>Pour vérifier votre adresse email, veuillez cliquer sur le lien suivant :</p>
                <p><a href="${verificationUrl}">Vérifier mon email</a></p>
                <p>Cordialement,<br>L'équipe Emeraude Limousine</p>
            `
        };

    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        ...emailContent
    });
}; 