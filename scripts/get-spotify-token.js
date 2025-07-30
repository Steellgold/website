import readline from 'readline';
import SpotifyWebApi from 'spotify-web-api-node';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function getSpotifyToken() {
  console.log('🔧 Spotify Token Setup\n');
  
  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');
  
  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: 'https://namely-fond-snail.ngrok-free.app/api/auth/spotify/callback'
  });
  
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played'
  ];
  
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  
  console.log('\n📋 Steps to follow:');
  console.log('1. Open this link in your browser:');
  console.log(authorizeURL);
  console.log('\n2. Log in with your Spotify account');
  console.log('3. Authorize the application');
  console.log("4. Copy the redirect URL (it starts with https://namely-fond-snail.ngrok-free.app/api/auth/spotify/callback?code=...)");
  
  const redirectUrl = await question('\nPaste the full redirect URL: ');
  
  try {
    const url = new URL(redirectUrl);
    const code = url.searchParams.get('code');
    
    if (!code) {
      throw new Error('Authorization code not found in URL');
    }
    
    const data = await spotifyApi.authorizationCodeGrant(code);
    
    console.log('\n✅ Token successfully obtained!');
    console.log('\n📝 Add these variables to your .env.local file:');
    console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
    console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.body.refresh_token}`);
    
    console.log('\n🔄 Refresh Token:');
    console.log(data.body.refresh_token);
    
  } catch (error) {
    console.error('\n❌ Error while obtaining the token:', error.message);
  } finally {
    rl.close();
  }
}

getSpotifyToken().catch(console.error);