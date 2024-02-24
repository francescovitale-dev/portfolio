// netlify/functions/translateProxy.js

exports.handler = async (event, context) => {
  // Aggiungi l'header CORS nella risposta
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://translate.google.com',
      // Altri header CORS se necessario
    },
    body: JSON.stringify({ message: 'Success' }),
  };
  
  return response;
};
