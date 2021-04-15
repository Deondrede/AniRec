const json = {
    title: "AniRec",
    description: "Always trying to give a better recommendation",
    "pages": [
        {
         "name": "page1",
         "elements": [
          {
           "type": "checkbox",
           "name": "PreferredGenres",
           "title": "What are your favorite genres?",
           "description": "Please pick all the genres you would consider watching.",
           "isRequired": true,
           "choices": [
            {
             "value": "Action",
             "text": "Action"
            },
            {
             "value": "Adventure",
             "text": "Adventure"
            },
            {
             "value": "Comedy",
             "text": "Comedy"
            },
            {
             "value": "Drama",
             "text": "Drama"
            },
            {
             "value": "Ecchi",
             "text": "Ecchi"
            },
            {
             "value": "Fantasy",
             "text": "Fantasy"
            },
            {
             "value": "Horror",
             "text": "Horror"
            },
            {
             "value": "Mahou Shoujo",
             "text": "Mahou Shoujo"
            },
            {
             "value": "Mecha",
             "text": "Mecha"
            },
            {
             "value": "Music",
             "text": "Music"
            },
            {
             "value": "Mystery",
             "text": "Mystery"
            },
            {
             "value": "Psychological",
             "text": "Psychological"
            },
            {
             "value": "Romance",
             "text": "Romance"
            },
            {
             "value": "Sci-Fi",
             "text": "Sci-Fi"
            },
            {
             "value": "Slife Of Life",
             "text": "Slice Of Life"
            },
            {
             "value": "Sports",
             "text": "Sports"
            },
            {
             "value": "Supernatural",
             "text": "Supernatural"
            },
            {
             "value": "Thriller",
             "text": "Thriller"
            }
           ],
           "choicesOrder": "asc",
           "colCount": 2,
           "maxSelectedChoices": 18,
           "selectAllText": "Select All Genres"
          },
          {
           "type": "image",
           "name": "AttackOnTitanPicture",
           "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-m5ZMNtFioc7j.png"
          },
          {
           "type": "radiogroup",
           "name": "AttackOnTitan",
           "title": "Have you watched Attack on Titan?",
           "isRequired": true,
           "choices": [
            {
             "value": "True",
             "text": "Yes"
            },
            {
             "value": "False",
             "text": "No"
            }
           ]
          },
          {
           "type": "image",
           "name": "MyHeroAcademiaPicture",
           "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21459-oZMZ7JwS5Sxq.jpg"
          },
          {
           "type": "radiogroup",
           "name": "MyHeroAcademia",
           "title": "Have you watched My Hero Academia?",
           "isRequired": true,
           "choices": [
            {
             "value": "True",
             "text": "Yes"
            },
            {
             "value": "False",
             "text": "No"
            }
           ]
          },
          {
           "type": "image",
           "name": "FullmetalAlchemistBrotherhoodPicture",
           "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-4CpuT7iWcZ37.png"
          },
          {
           "type": "radiogroup",
           "name": "FullmetalAlchemistBrotherhood",
           "title": "Have you watched Fullmetal Alchemist: Brotherhood?",
           "isRequired": true,
           "choices": [
            {
             "value": "True",
             "text": "Yes"
            },
            {
             "value": "False",
             "text": "No"
            }
           ]
          },
          {
           "type": "image",
           "name": "JujitsuKaisenPicture",
           "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-979nF8TZP2xC.jpg"
          },
          {
           "type": "radiogroup",
           "name": "JujitsuKaisen",
           "title": "Have you watched Jujitsu Kaisen?",
           "isRequired": true,
           "choices": [
            {
             "value": "True",
             "text": "Yes"
            },
            {
             "value": "False",
             "text": "No"
            }
           ]
          },
          {
           "type": "radiogroup",
           "name": "Favorite?",
           "title": "Do you have a favorite anime(s)?",
           "choices": [
            {
             "value": "True",
             "text": "Yes"
            },
            {
             "value": "False",
             "text": "No"
            }
           ]
          },
          {
           "type": "text",
           "name": "FavoriteAnime",
           "visibleIf": "{Favorite?} = 'True'",
           "title": "Type your favorite anime",
           "enableIf": "{Favorite?} = 'True'",
           "requiredIf": "{Favorite?} = 'True'"
          }
         ]
        }
       ]
};
export default json;
