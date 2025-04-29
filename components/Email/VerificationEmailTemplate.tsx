export const VerificationEmailTemplate = (nameUser: string, verificationLink: string): string => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #ffffff !important;
      margin: 0;
      padding: 0;
      background-color: #333333 !important;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .email-header {
      text-align: center;
      padding-bottom: 20px;
    }
    .email-header h1 {
      color: #D4AF37;
    }
    .email-body {
      text-align: left;
    }
    .email-footer {
      text-align: center;
      font-size: 12px;
      color: #888;
      margin-top: 20px;
    }
    .btn {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 20px;
      font-size: 16px;
      color: #ffffff !important;
      background-color: #D4AF37;
      text-decoration: none;
      border-radius: 4px;
    }
    .btn:hover {
      background-color: #0056b3;
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
      <p>Merci de vous être inscrit à RS Advisor ! Veuillez cliquer sur le bouton ci-dessous pour vérifier votre adresse email.</p>
      <a href="${verificationLink}" class="btn">Vérifier mon email</a>
      <p>Si vous n'avez pas demandé cette vérification, vous pouvez ignorer cet email.</p>
    </div>
    <div class="email-footer">
      <p>© 2025 RS Advisor. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;
