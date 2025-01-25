import { defineQuery } from "next-sanity";

export const STARTUPS_QUARIES =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || catergory match $search || author -> name match $search ] | order(_createdAt desc){
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

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
    title, 
    slug,
    _createdAt,
    author -> {
      _id,
      name,
      username,
      image,
      bio
    },
    views, 
    description, 
    catergory, 
    image,
    pitch
}
`);
