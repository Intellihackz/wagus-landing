import { db, storage } from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export interface TokenVerificationData {
  tokenName: string;
  tokenSymbol: string;
  tokenAddress: string;
  description: string;
  websiteUrl?: string;
  emailContact: string;
  logoUrl?: string;
  submittedAt: Date;
  status: "pending" | "approved" | "rejected";
}

export async function submitTokenVerification(data: Omit<TokenVerificationData, "submittedAt" | "status" | "logoUrl">, logoImageData: string) {
  try {
    // First upload the image to Firebase Storage
    const logoFileName = `token-logos/${data.tokenSymbol.toLowerCase()}-${Date.now()}`;
    const storageRef = ref(storage, logoFileName);
    
    // Upload the base64 image data
    const uploadResult = await uploadString(storageRef, logoImageData, 'data_url');
    
    // Get the download URL
    const logoUrl = await getDownloadURL(uploadResult.ref);
    
    // Clean up the data - remove any undefined values
    const cleanData = {
      tokenName: data.tokenName,
      tokenSymbol: data.tokenSymbol,
      tokenAddress: data.tokenAddress,
      description: data.description,
      emailContact: data.emailContact,
      // Only include websiteUrl if it's a non-empty string
      ...(data.websiteUrl && data.websiteUrl.trim() !== "" ? { websiteUrl: data.websiteUrl } : {})
    };
    
    // Now save the data to Firestore
    const verificationData = {
      ...cleanData,
      logoUrl,
      submittedAt: new Date(),
      status: "pending"
    };
    
    const docRef = await addDoc(collection(db, "tokenVerifications"), verificationData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting verification:", error);
    return { success: false, error };
  }
}
