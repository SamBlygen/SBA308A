const Api_Url = 'https://bible-api.com';


export async function searchVerse(query, page = 1) {
  try {
    const response = await fetch(`https://bible-api.com/${query}`);
    if (!response.ok) throw new Error('Verse not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function saveVerse(data) {
  try {
    const response = await fetch(`https://bible-api.com/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to save');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function updateVerse(id, data) {
  try {
    const response = await fetch(`https://bible-api.com/verses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Verse Not updated');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
