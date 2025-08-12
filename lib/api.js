const API_URL = 'https://avg-webcv-api.onrender.com/info'

export async function createInfo(data) {
  try {
    const response = await fetch(`${API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}
