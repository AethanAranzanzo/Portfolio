import https from 'https';
import dotenv from 'dotenv';

dotenv.config({ path: 'client--/.env' });

const API_KEY = process.env.VITE_GEMINI_API_KEY;

console.log('🔍 Fetching available models via HTTP...\n');
console.log('API Key (first 10 chars):', API_KEY?.substring(0, 10) + '...\n');

const options = {
  hostname: 'generativelanguage.googleapis.com',
  path: `/v1beta/models?key=${API_KEY}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      const response = JSON.parse(data);
      console.log('✅ Available models:\n');
      
      response.models?.forEach(model => {
        if (model.supportedGenerationMethods?.includes('generateContent')) {
          console.log(`📦 ${model.name}`);
          console.log(`   Display Name: ${model.displayName}`);
          console.log(`   Methods: ${model.supportedGenerationMethods.join(', ')}\n`);
        }
      });
    } else {
      console.error('❌ Error:', res.statusCode);
      console.error(data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error);
});

req.end();