import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";
import React from "react";

const categories = [
  {
    id: 1,
    title: "Fiction",
    img: "https://img.freepik.com/free-photo/education-day-scene-fantasy-style-aesthetic_23-2151040251.jpg?t=st=1721572976~exp=1721576576~hmac=e561d6c4992e81078a5533686a7d9b3ff9747547474e5898841e6e53738356f6andw=1380",
    value: "Fiction_books",
    route: "shop/fiction",
    subcategories: [
      {
        id: 1,
        name: "Adventure",
        img: "https://source.unsplash.com/1600x900/?adventure",
        value: "Adventure_books",
      },
      {
        id: 2,
        name: "Fantasy",
        img: "https://source.unsplash.com/1600x900/?fantasy",
        value: "Fantasy_books",
      },
      {
        id: 3,
        name: "Historical Fiction",
        img: "https://source.unsplash.com/1600x900/?history",
        value: "Historical_Fiction_books",
      },
      {
        id: 4,
        name: "Horror",
        img: "https://source.unsplash.com/1600x900/?horror",
        value: "Horror_books",
      },
      {
        id: 5,
        name: "Literary Fiction",
        img: "https://source.unsplash.com/1600x900/?literature",
        value: "Literary_Fiction_books",
      },
      {
        id: 6,
        name: "Mystery",
        img: "https://source.unsplash.com/1600x900/?mystery",
        value: "Mystery_books",
      },
      {
        id: 7,
        name: "Romance",
        img: "https://source.unsplash.com/1600x900/?romance",
        value: "Romance_books",
      },
      {
        id: 8,
        name: "Science Fiction",
        img: "https://source.unsplash.com/1600x900/?sciencefiction",
        value: "Science_Fiction_books",
      },
      {
        id: 9,
        name: "Thriller",
        img: "https://source.unsplash.com/1600x900/?thriller",
        value: "Thriller_books",
      },
    ],
  },
  {
    id: 2,
    title: "Non-Fiction",
    img: "https://as1.ftcdn.net/v2/jpg/07/64/09/54/1000_F_764095438_9OYlXKBQgL9xIfTDmxru28r8SOrL04Nk.jpg",
    value: "Non-Fiction_books",
    route: "shop/non-fiction",
    subcategories: [
      {
        id: 10,
        name: "Biography",
        img: "https://source.unsplash.com/1600x900/?biography",
        value: "Biography_books",
      },
      {
        id: 11,
        name: "Business",
        img: "https://source.unsplash.com/1600x900/?business",
        value: "Business_books",
      },
      {
        id: 12,
        name: "Cookbooks",
        img: "https://source.unsplash.com/1600x900/?cookbooks",
        value: "Cookbooks_books",
      },
      {
        id: 13,
        name: "Health and Fitness",
        img: "https://source.unsplash.com/1600x900/?health,fitness",
        value: "Health_Fitness_books",
      },
      {
        id: 14,
        name: "History",
        img: "https://source.unsplash.com/1600x900/?history",
        value: "History_books",
      },
      {
        id: 15,
        name: "Memoir",
        img: "https://source.unsplash.com/1600x900/?memoir",
        value: "Memoir_books",
      },
      {
        id: 16,
        name: "Politics",
        img: "https://source.unsplash.com/1600x900/?politics",
        value: "Politics_books",
      },
      {
        id: 17,
        name: "Self-Help",
        img: "https://source.unsplash.com/1600x900/?selfhelp",
        value: "Self-Help_books",
      },
      {
        id: 18,
        name: "True Crime",
        img: "https://source.unsplash.com/1600x900/?truecrime",
        value: "True_Crime_books",
      },
    ],
  },
  {
    id: 3,
    title: "Children's Books",
    img: "https://i.pinimg.com/originals/4b/00/29/4b00290ed409f18906fab0275a45e8c2.jpg",
    value: "Children's_Books",
    route: "shop/children's%20books",
    subcategories: [
      {
        id: 19,
        name: "Picture Books",
        img: "https://source.unsplash.com/1600x900/?picturebooks",
        value: "Picture_Books_books",
      },
      {
        id: 20,
        name: "Young Adult",
        img: "https://source.unsplash.com/1600x900/?youngadult",
        value: "Young_Adult_books",
      },
    ],
  },
  {
    id: 4,
    title: "Graphic Novels and Comics",
    img: "https://c8.alamy.com/comp/K59C0X/athens-greece-march-31-2016-vintage-comic-books-and-graphic-novels-K59C0X.jpg",
    value: "Graphic_Novels_and_Comics_books",
    route: "shop/graphic%20novels%20and%20comics",
    subcategories: [
      {
        id: 24,
        name: "Superhero",
        img: "https://source.unsplash.com/1600x900/?superhero",
        value: "Superhero_books",
      },
      {
        id: 25,
        name: "Manga Comics",
        img: "https://source.unsplash.com/1600x900/?manga",
        value: "Manga_Comics_books",
      },
      {
        id: 26,
        name: "Science Fiction and Fantasy",
        img: "https://source.unsplash.com/1600x900/?sciencefiction,fantasy",
        value: "Science_Fiction_and_Fantasy_books",
      },
      {
        id: 27,
        name: "Literary",
        img: "https://source.unsplash.com/1600x900/?literary",
        value: "Literary_books",
      },
    ],
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
