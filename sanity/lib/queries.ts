import { defineQuery } from "next-sanity";

export const STARTUPS_QUARIES =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id, 
    title, 
    slug,
    _createdAt,
    author -> {
      _id,
      name,
      slug,
      image,
      bio
    },
    views, 
    description, 
    catergory, 
    image
}`);
