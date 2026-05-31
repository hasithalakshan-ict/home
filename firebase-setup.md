# Firebase Setup Guide — Hasitha ICT LMS

## Step 1: Create a Free Firebase Project
1. Go to https://firebase.google.com
2. Click "Get started" → Sign in with Google
3. Click "Add project" → Name it "hasitha-ict-lms" → Continue
4. Disable Google Analytics (optional) → Create project

## Step 2: Enable Authentication
1. In Firebase console → click "Authentication" → Get started
2. Under "Sign-in method" tab → Enable "Email/Password"
3. Click Save

## Step 3: Create Firestore Database
1. In Firebase console → click "Firestore Database" → Create database
2. Choose "Start in test mode" (for now) → Next
3. Pick your region (e.g., asia-south1 for Sri Lanka) → Enable

## Step 4: Get Your Config Keys
1. Click the gear icon (⚙) → Project Settings
2. Under "Your apps" → click </> (Web app icon)
3. Register app name: "hasitha-ict-web" → Register
4. Copy the firebaseConfig object

## Step 5: Add Firebase to index.html
Paste this in the <head> section of index.html (replace with YOUR config):

```html
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
```

## Step 6: Replace handleLogin() function
```javascript
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  if (!email || !pass) { alert('Please fill in all fields.'); return; }
  
  auth.signInWithEmailAndPassword(email, pass)
    .then(cred => {
      closeModal();
      alert('Welcome back! You are now logged in.');
    })
    .catch(err => alert('Login failed: ' + err.message));
}
```

## Step 7: Replace handleRegister() function
```javascript
function handleRegister() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const grade = document.getElementById('regGrade').value;
  const medium = document.getElementById('regMedium').value;
  const pass = document.getElementById('regPassword').value;
  if (!name || !email || !grade || !medium || !pass) { alert('Fill all fields.'); return; }

  auth.createUserWithEmailAndPassword(email, pass)
    .then(cred => {
      return db.collection('students').doc(cred.user.uid).set({
        name, email, grade, medium,
        enrolledAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      closeModal();
      alert('Welcome ' + name + '! Your account has been created.');
    })
    .catch(err => alert('Registration failed: ' + err.message));
}
```

## Step 8: Hosting (Optional — Deploy for Free)
1. Install Node.js from nodejs.org
2. Run: npm install -g firebase-tools
3. Run: firebase login
4. Run: firebase init hosting
5. Run: firebase deploy
→ You'll get a free URL like: hasitha-ict-lms.web.app

## Viewing Student Data
- Go to Firebase Console → Firestore Database
- Open "students" collection
- You'll see every registered student's name, grade, medium, and email

## Free Tier Limits (More than enough to start)
- Authentication: Unlimited users FREE
- Firestore: 1GB storage, 50,000 reads/day FREE
- Hosting: 10GB storage, 360MB/day transfer FREE
