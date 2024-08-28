export async function fetchVerse(url){
  try{
    const response = await fetch (url);
    if (!response.ok){
      throw new Error('Issue getting verse');
    }
    return await response.json();
  } catch (error){
    console.log("Error");
    throw error;
  }
}