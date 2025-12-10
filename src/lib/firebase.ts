import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, GithubAuthProvider } from 'firebase/auth';
import { getFunctions, httpsCallable, Functions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: 'glnk-dev.firebaseapp.com',
  projectId: 'glnk-dev',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || '',
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let functions: Functions | null = null;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  functions = getFunctions(app, 'us-central1');
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export const githubProvider = new GithubAuthProvider();
githubProvider.addScope('read:user');
githubProvider.addScope('user:email');

export const requestSignup = functions
  ? httpsCallable<{ username: string }, { success: boolean; issue_url: string }>(functions, 'request_signup')
  : null;

export { auth, functions };
export default app;
