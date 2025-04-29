export const CodeSuppressionEmail = (nameUser: string, token: string): string => `
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', 'Helvetica', sans-serif !important;
      font-size: 18px;
      line-height: 1.6rem;
      color: #ffffff !important;
      margin: 0;
      padding: 0;
      background-color: #181818 !important;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #1f1f1f;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .email-header {
      text-align: center;
      color: #ffffff;
      padding-bottom: 20px;
    }
    .email-header h1 {
      color: #1e90ff;
      font-size: 24px;
      font-weight: 600;
    }
    .email-body {
      text-align: left;
      color: #e0e0e0;
    }
    .email-body p {
      margin: 10px 0;
    }
    .email-footer {
      text-align: center;
      font-size: 14px;
      color: #888;
      margin-top: 20px;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin-top: 20px;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff !important;
      background-color: #1e90ff;
      text-decoration: none;
      border-radius: 6px;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #1c86ee;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>RS Advisor</h1>
      <p>Vérifiez votre adresse email</p>
    </div>
    <div class="email-body">
      <p>Bonjour ${nameUser},</p>
      <p>Vous avez demandé la suppression de votre compte. Veuillez entrer le code suivant pour supprimer votre compte :</p>
      <p style="font-size: 22px; font-weight: 600; text-align: center;">${token}</p>
      <a href="${process.env.NEXT_PUBLIC_URL}/account?token=${token}&type=delete-account" class="btn">Supprimer mon compte</a>
      <p>Si vous n'avez pas demandé cette suppression, vous pouvez ignorer cet email.</p>
    </div>
    <div class="email-footer">
      <p>© 2025 RS Advisor. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;
