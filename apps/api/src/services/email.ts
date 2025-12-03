import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailTemplate = 'verification' | 'welcome' | 'password-reset' | 'operation-invite';

interface SendEmailOptions {
  to: string;
  subject: string;
  template: EmailTemplate;
  data: Record<string, unknown>;
}

const templates: Record<EmailTemplate, (data: Record<string, unknown>) => string> = {
  verification: (data) => `
    <h1>Bienvenue sur GOAF, ${data.name} !</h1>
    <p>Cliquez sur le lien ci-dessous pour vérifier votre email :</p>
    <a href="${data.url}">Vérifier mon email</a>
    <p>Ce lien expire dans 24 heures.</p>
    <p>— L'équipe GOAF</p>
  `,
  welcome: (data) => `
    <h1>Bienvenue dans le Groupe d'Opérations de l'Armée Française !</h1>
    <p>Soldat ${data.name}, votre compte a été créé avec succès.</p>
    <p>Vous pouvez maintenant accéder à toutes les fonctionnalités de la plateforme.</p>
    <p>— L'équipe GOAF</p>
  `,
  'password-reset': (data) => `
    <h1>Réinitialisation de mot de passe</h1>
    <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
    <a href="${data.url}">Réinitialiser mon mot de passe</a>
    <p>Ce lien expire dans 1 heure.</p>
    <p>— L'équipe GOAF</p>
  `,
  'operation-invite': (data) => `
    <h1>Invitation à une opération</h1>
    <p>Soldat ${data.name}, vous êtes invité à participer à l'opération "${data.operationName}".</p>
    <p>Date : ${data.date}</p>
    <a href="${data.url}">Voir les détails</a>
    <p>— L'équipe GOAF</p>
  `,
};

export async function sendEmail({ to, subject, template, data }: SendEmailOptions) {
  const html = templates[template](data);

  const { error } = await resend.emails.send({
    from: 'GOAF <noreply@goaf.fr>',
    to,
    subject,
    html,
  });

  if (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
}
