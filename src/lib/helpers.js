/* Format Price */

export function formatPrice(price){

  if(!price) return ""

  return `₹ ${price}`

}

/* Slug Generator */

export function slugify(text){

  return text
    .toLowerCase()
    .replace(/\s+/g,"-")
    .replace(/[^\w\-]+/g,"")

}

/* Capitalize */

export function capitalize(str){

  return str.charAt(0).toUpperCase() + str.slice(1)

}