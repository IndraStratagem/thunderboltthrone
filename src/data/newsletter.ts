// ============================================================
// NEWSLETTER SUBSCRIPTION BACKEND
// ============================================================
// This module provides a client-side "backend" for newsletter
// subscriptions using localStorage as the database.
//
// In a production environment, you would replace these functions
// with API calls to your actual backend (e.g., Express, Django,
// Supabase, Firebase, etc.)
//
// The localStorage approach works for:
// - Demos and prototypes
// - Single-device personal use
// - Development and testing
//
// For production, consider:
// - Supabase (free tier, PostgreSQL)
// - Firebase Firestore
// - Airtable API
// - ConvertKit / Mailchimp API
// - Your own REST API with a database
// ============================================================

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string; // Which page they subscribed from
}

const STORAGE_KEY = "blog_newsletter_subscribers";

function generateId(): string {
  return `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function getSubscribers(): NewsletterSubscriber[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveSubscribers(subscribers: NewsletterSubscriber[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
}

export async function subscribeToNewsletter(
  email: string,
  source: string = "homepage"
): Promise<{ success: boolean; message: string }> {
  // Simulate network delay for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const subscribers = getSubscribers();

  // Check for duplicate
  if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: "This email is already subscribed!" };
  }

  // Add new subscriber
  const newSubscriber: NewsletterSubscriber = {
    id: generateId(),
    email: email.toLowerCase(),
    subscribedAt: new Date().toISOString(),
    source,
  };

  subscribers.push(newSubscriber);
  saveSubscribers(subscribers);

  return {
    success: true,
    message: "Welcome aboard! 🎉 You'll receive our latest posts in your inbox.",
  };
}

export function getSubscriberCount(): number {
  return getSubscribers().length;
}

export function getAllSubscribers(): NewsletterSubscriber[] {
  return getSubscribers();
}

export function unsubscribe(email: string): boolean {
  const subscribers = getSubscribers();
  const filtered = subscribers.filter(
    (s) => s.email.toLowerCase() !== email.toLowerCase()
  );
  if (filtered.length < subscribers.length) {
    saveSubscribers(filtered);
    return true;
  }
  return false;
}
