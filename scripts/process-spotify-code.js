import readline from 'readline';
import SpotifyWebApi from 'spotify-web-api-node';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function processSpotifyCode() {
  console.log('🔧 Processing Spotify Code\n');
  
  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');
  const authCode = await question('Paste the Spotify code (the part after spotify_code=): ');
  
  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: 'https://namely-fond-snail.ngrok-free.app/api/auth/spotify/callback'
  });
  
  try {
    console.log('\n🔄 Exchanging the code for a token...');
    const data = await spotifyApi.authorizationCodeGrant(authCode);
    
    console.log('\n✅ Token successfully obtained!');
    console.log('\n📝 Add these variables to your .env.local file:');
    console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
    console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.body.refresh_token}`);
    
    console.log('\n🔄 Refresh Token:');
    console.log(data.body.refresh_token);
    
    console.log('\n⏰ Access Token (expires in 1 hour):');
    console.log(data.body.access_token);
    
  } catch (error) {
    console.error('\n❌ Error while exchanging the code:', error.message);
    if (error.body) {
      console.error('Details:', error.body);
    }
  } finally {
    rl.close();
  }
}

processSpotifyCode().catch(console.error);