# Firebase Configuration

This project uses Firebase for its backend functionality. This document explains how to set up Firebase for this project, including deploying indexes and security rules.

## Prerequisites

- Node.js installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase project created in the [Firebase Console](https://console.firebase.google.com/)

## Setup

1. Login to Firebase:
   ```
   firebase login
   ```

2. Initialize Firebase in your project (if not already done):
   ```
   firebase init
   ```
   - Select Firestore, Storage, and Hosting features
   - Choose your Firebase project
   - Accept default file locations for rules and indexes

## Environment Variables

Create a `.env.local` file with the following Firebase configuration variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Firebase Indexes

This project uses several Firestore indexes for optimized querying. These are defined in `firestore.indexes.json`.

To deploy the indexes:

```
firebase deploy --only firestore:indexes
```

### Required Indexes

1. **Success Stories Collection**:
   - Composite index on `status` (ASC) and `createdAt` (DESC) 
   - Used for querying published success stories in reverse chronological order

2. **Success Story Comments Collection**:
   - Composite index on `storyId` (ASC) and `createdAt` (ASC)
   - Used for retrieving comments for a specific story in chronological order

3. **Dev Logs Collection**:
   - Composite index on `status` (ASC) and `createdAt` (DESC)
   - Used for querying published dev logs in reverse chronological order

## Security Rules

This project uses Firestore security rules to protect data. These are defined in `firestore.rules`.

To deploy the rules:

```
firebase deploy --only firestore:rules
```

The rules implement the following security model:

- Public read access to published success stories and dev logs
- Public read access to comments
- Authenticated users can create comments (with their own userId)
- Users can delete their own comments
- Admin users have full CRUD access to all documents

## Firebase Utils

The project includes utility functions for working with Firebase in `src/lib/firebase-utils.ts`:

- `createIndexedQuery`: Creates properly indexed Firestore queries
- `indexedQueries`: Pre-configured queries for common operations

## Troubleshooting

If you encounter errors about missing indexes when querying Firestore, the Firebase console will provide a direct link to create the required index.

For more information, see the [Firebase Documentation](https://firebase.google.com/docs).
