import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-aw5jei7h.auth0.com',
    clientID: 'RwsA7qtzjpzMWb0McROKpNsiuktCOJup',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}