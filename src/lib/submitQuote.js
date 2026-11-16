/**
 * Quote request submission handler.
 *
 * Integration:
 * 1. Set VITE_QUOTE_API_URL in a `.env` file to your API endpoint.
 * 2. Optionally set VITE_QUOTE_API_KEY if your backend requires a header.
 * 3. The payload is sent as JSON via POST.
 *
 * Until an endpoint is configured, submissions fail with a clear error
 * so we never fake a successful send.
 */
export async function submitQuoteRequest(payload) {
  const endpoint = import.meta.env.VITE_QUOTE_API_URL

  if (!endpoint) {
    const error = new Error(
      'Le service d’envoi n’est pas encore configuré. Ajoutez VITE_QUOTE_API_URL pour activer les demandes de devis.',
    )
    error.code = 'API_NOT_CONFIGURED'
    throw error
  }

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const apiKey = import.meta.env.VITE_QUOTE_API_KEY
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...payload,
      source: 'saadaoui-website',
      submittedAt: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    let message = 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.'
    try {
      const data = await response.json()
      if (data?.message) message = data.message
    } catch {
      // ignore JSON parse errors
    }
    const error = new Error(message)
    error.code = 'API_ERROR'
    error.status = response.status
    throw error
  }

  try {
    return await response.json()
  } catch {
    return { ok: true }
  }
}
