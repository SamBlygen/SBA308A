const Api_Url = 'https://bible-api.com';


export async function searchVerse(query){
  try{
    const response = await fetch ('https://bible-api.com/BOOK+CHAPTER:VERSE');
    if (!response.ok) throw new Error('verse not found');
    const data = await response.json();
    return data;
  }catch(error){
    console.log(error);
    throw error;
  }
}