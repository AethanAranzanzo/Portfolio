import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config({ path: 'client--/.env' });

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

async function listAvailableModels() {
  try {
    console.log('🔍 Fetching available models...\n');
    
    // Try to list models
    const models = await genAI.listModels();
    
    console.log('✅ Available models:');
    for (const model of models) {
      console.log(`\n📦 ${model.name}`);
      console.log(`   Display Name: ${model.displayName}`);
      console.log(`   Supported Methods: ${model.supportedGenerationMethods?.join(', ')}`);
    }
  } catch (error) {
    console.error('❌ Error listing models:', error.message);
    console.log('\n💡 Trying common model names instead...\n');
    
    // Try common model names
    const modelNames = [
      'gemini-pro',
      'gemini-1.0-pro',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-1.5-pro-latest',
      'gemini-2.0-flash-exp',
      'models/gemini-pro',
      'models/gemini-1.5-flash'
    ];

    for (const modelName of modelNames) {
      try {
        console.log(`Testing: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Say hello');
        console.log(`✅ ${modelName} WORKS!`);
        console.log(`   Response: ${result.response.text().substring(0, 50)}...\n`);
      } catch (error) {
        console.log(`❌ ${modelName} failed: ${error.message}\n`);
      }
    }
  }
}

listAvailableModels();