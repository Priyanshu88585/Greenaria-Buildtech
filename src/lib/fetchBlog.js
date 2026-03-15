export async function fetchBlogPosts(){

  try{

    const res = await fetch("/api/blog")

    const data = await res.json()

    return data.data

  }catch(error){

    console.error("Failed to fetch blog posts",error)

    return []

  }

}