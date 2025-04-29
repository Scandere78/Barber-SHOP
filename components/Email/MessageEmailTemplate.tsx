export const MessageEmailTemplate = (nameUser: string, message: string, email: string): string => `
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
    .content {
      font-size: 1.05rem;
      margin-top: 50px;
      background-color: burlywood;
      padding: 15px;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>RS Advisor</h1>
    </div>
    <div class="email-body">
      <p>Bonjour vous avez reçus un message de : ${nameUser}</p>
      <p>Email de ${nameUser} : ${email}</p>
      <p class="content">${message}</p>
    </div>
    <div class="email-footer">
      <p>© 2025 RS Advisor. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;
