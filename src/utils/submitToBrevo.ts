export async function submitToBrevo(email: string, listId: number, attributes?: Record<string, any>): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("submitToBrevo sending:", email, listId, JSON.stringify(attributes));
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listId,
        attributes,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return { success: true };
    } else {
      return { success: false, error: data.error || 'Failed to submit form' };
    }
  } catch (error: any) {
    console.error('Error submitting to Brevo:', error);
    return { success: false, error: error.message || 'An unexpected error occurred' };
  }
}
