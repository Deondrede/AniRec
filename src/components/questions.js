const json = {
    "title": "AniRec",
    "description": "Always trying to give a better recommendation",
    "pages": [
     {
      "name": "Start",
      "elements": [
       {
        "type": "text",
        "name": "Username",
        "title": "Type Username",
        "hideNumber": true
       }
      ]
     },
     {
      "name": "Genre_Selection",
      "elements": [
       {
        "type": "checkbox",
        "name": "prefered_genres",
        "title": "Please select your favorite genres.",
        "hideNumber": true,
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
          "value": "Fantasy",
          "text": "Fantasy"
         },
         {
          "value": "Mahou Shoujo",
          "text": "Magical Girl"
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
          "value": "Slice of Life",
          "text": "Slice of Life"
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
         },
         {
          "value": "Horror",
          "text": "Horror"
         }
        ],
        "choicesOrder": "asc",
        "noneText": "Skip Survey",
        "otherText": "Skip survey. I want to watch it all!",
        "colCount": 2,
        "hasSelectAll": true,
        "maxSelectedChoices": 17
       }
      ]
     },
     {
      "name": "Action_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Action Anime Images",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "AON",
          "text": "Attack on Titan",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-m5ZMNtFioc7j.png"
         },
         {
          "value": "BNHA",
          "text": "My Hero Academia",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg"
         },
         {
          "value": "panda",
          "text": "Hunter x Hunter",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Action",
        "visibleIf": "{prefered_genres} contains 'Action'",
        "indent": 2,
        "title": "Have you seen and liked any of these Action anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Action'",
        "requiredIf": "{prefered_genres} contains 'Action'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Attack on Titan",
          "text": "Attack on Titan"
         },
         {
          "value": "My Hero Academia",
          "text": "My Hero Academia"
         },
         {
          "value": "Hunter x Hunter",
          "text": "Hunter x Hunter"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Action'",
      "enableIf": "{prefered_genres} contains 'Action'",
      "requiredIf": "{Please select your favorite genres.} contains 'Action'"
     },
     {
      "name": "Adventure_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Adventure Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "DemonSlayer",
          "text": "Demon Slayer",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg"
         },
         {
          "value": "SAO",
          "text": "Sword Art Online",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg"
         },
         {
          "value": "FMAB",
          "text": "Fullmetal Alchemist: Brotherhood",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-4CpuT7iWcZ37.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Adventure",
        "visibleIf": "{prefered_genres} contains 'Adventure'",
        "indent": 2,
        "title": "Have you seen and liked any of these Adventure anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Adventure'",
        "requiredIf": "{prefered_genres} contains 'Adventure'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Demon Slayer: Kimetsu no Yaiba",
          "text": "Demon Slayer: Kimetsu no Yaiba"
         },
         {
          "value": "Sword Art Online",
          "text": "Sword Art Online"
         },
         {
          "value": "Fullmetal Alchemist: Brotherhood",
          "text": "Fullmetal Alchemist: Brotherhood"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Adventure'",
      "enableIf": "{prefered_genres} contains 'Adventure'"
     },
     {
      "name": "Comedy_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Comedy Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "One-Punch Man",
          "text": "One-Punch Man",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-8WpMBeqsSVx8.png"
         },
         {
          "value": "Naruto",
          "text": "Naruto",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-E3YH5W6sz6H7.jpg"
         },
         {
          "value": "Assassination Classroom",
          "text": "Assassination Classroom",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-q0b3Ok1cAbPd.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Comedy",
        "visibleIf": "{prefered_genres} contains 'Comedy'",
        "indent": 2,
        "title": "Have you seen and liked any of these Comedy anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Comedy'",
        "requiredIf": "{prefered_genres} contains 'Comedy'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "One-Punch Man",
          "text": "One-Punch Man"
         },
         {
          "value": "Naruto",
          "text": "Naruto"
         },
         {
          "value": "Assassination Classroom",
          "text": "Assassination Classroom"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "100"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Comedy'",
      "enableIf": "{prefered_genres} contains 'Comedy'",
      "requiredIf": "{prefered_genres} contains 'Comedy'"
     },
     {
      "name": "Drama_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Drama Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Tokyo Ghoul",
          "text": "Tokyo Ghoul",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg"
         },
         {
          "value": "The Promised Neverland",
          "text": "The Promised Neverland",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-NhSwxv7HY9y9.jpg"
         },
         {
          "value": "JUJUTSU KAISEN",
          "text": "JUJUTSU KAISEN",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-979nF8TZP2xC.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Drama",
        "visibleIf": "{prefered_genres} contains 'Drama'",
        "indent": 2,
        "title": "Have you seen and liked any of these Drama anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Drama'",
        "requiredIf": "{prefered_genres} contains 'Drama'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Tokyo Ghoul",
          "text": "Tokyo Ghoul"
         },
         {
          "value": "The Promised Neverland",
          "text": "The Promised Neverland"
         },
         {
          "value": "JUJUTSU KAISEN",
          "text": "JUJUTSU KAISEN"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Drama'",
      "enableIf": "{prefered_genres} contains 'Drama'",
      "requiredIf": "{prefered_genres} contains 'Drama'"
     },
     {
      "name": "Fantasy_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Fantasy Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "No Game No Life",
          "text": "No Game No Life",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx19815-bIo51RMWWhLv.jpg"
         },
         {
          "value": "Re:ZERO -Starting Life in Another World-",
          "text": "Re:ZERO -Starting Life in Another World-",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21355-xsLpqMFkMQQk.png"
         },
         {
          "value": "The Seven Deadly Sins",
          "text": "The Seven Deadly Sins",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20789-SsAI4pvvI9EU.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "question1",
        "visibleIf": "{prefered_genres} contains 'Fantasy'",
        "indent": 2,
        "title": "Have you seen and liked any of these Fantasy anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Fantasy'",
        "requiredIf": "{prefered_genres} contains 'Fantasy'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "No Game No Life",
          "text": "No Game No Life"
         },
         {
          "value": "Re:ZERO -Starting Life in Another World-",
          "text": "Re:ZERO -Starting Life in Another World-"
         },
         {
          "value": "The Seven Deadly Sins",
          "text": "The Seven Deadly Sins"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "65"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Fantasy'",
      "enableIf": "{prefered_genres} contains 'Fantasy'",
      "requiredIf": "{prefered_genres} contains 'Fantasy'"
     },
     {
      "name": "Horror_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Horror Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Akame go Kill!",
          "text": "Akame go Kill!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20613-JpRbnstIj6PO.png"
         },
         {
          "value": "Parasyte -the maxim-",
          "text": "Parasyte -the maxim-",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20623-rVoHgF3Apo7P.jpg"
         },
         {
          "value": "The Future Diary",
          "text": "The Future Diary",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10620-OMnOMuZBgEKy.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Horror",
        "visibleIf": "{prefered_genres} contains 'Horror'",
        "indent": 2,
        "title": "Have you seen and liked any of these Horror anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Horror'",
        "requiredIf": "{prefered_genres} contains 'Horror'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Akame ga Kill!",
          "text": "Akame ga Kill!"
         },
         {
          "value": "Parasite -the maxim-",
          "text": "Parasite -the maxim-"
         },
         {
          "value": "The Future Diary",
          "text": "The Future Diary"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "80"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Horror'",
      "enableIf": "{prefered_genres} contains 'Horror'",
      "requiredIf": "{prefered_genres} contains 'Horror'"
     },
     {
      "name": "MagicalGirl_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Magical Girl Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Puella Magi Madoka Magica",
          "text": "Puella Magi Madoka Magica",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9756-oqKE3E6DLtgm.jpg"
         },
         {
          "value": "Cardcaptor Sakura",
          "text": "Cardcaptor Sakura",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx232-ZqAR0y2xkowj.png"
         },
         {
          "value": "Sailor Moon",
          "text": "Sailor Moon",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx530-I0XN6WzeBtAg.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Magical Girl",
        "visibleIf": "{prefered_genres} contains 'Mahou Shoujo'",
        "indent": 2,
        "title": "Have you seen and liked any of these Action anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Mahou Shoujo'",
        "requiredIf": "{prefered_genres} contains 'Mahou Shoujo'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Pulla Magi Madoka Magica",
          "text": "Pulla Magi Madoka Magica"
         },
         {
          "value": "Cardcaptor Sakura",
          "text": "Cardcaptor Sakura"
         },
         {
          "value": "Sailor Moon",
          "text": "Sailor Moon"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Mahou Shoujo'",
      "enableIf": "{prefered_genres} contains 'Mahou Shoujo'",
      "requiredIf": "{prefered_genres} contains 'Mahou Shoujo'"
     },
     {
      "name": "Mecha_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Mecha Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "DARLING in the FRANXX",
          "text": "DARLING in the FRANXX",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99423-8MBxtwCeHf8B.png"
         },
         {
          "value": "Code Geass: Lelouch of the Rebellion",
          "text": "Code Geass: Lelouch of the Rebellion",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1575-ZJYlg8yjvMKI.jpg"
         },
         {
          "value": "Neon Genesis Evangelion",
          "text": "Neon Genesis Evangelion",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx30-1Ro1NFFg28bu.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Mecha",
        "visibleIf": "{prefered_genres} contains 'Mecha'",
        "indent": 2,
        "title": "Have you seen and liked any of these Mecha anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Mecha'",
        "requiredIf": "{prefered_genres} contains 'Mecha'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "DARLING in the FRANXX",
          "text": "DARLING in the FRANXX"
         },
         {
          "value": "Code Glass: Lelouch of the Rebellion",
          "text": "Code Glass: Lelouch of the Rebellion"
         },
         {
          "value": "Neon Genesis Evagelion",
          "text": "Neon Genesis Evagelion"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Mecha'",
      "enableIf": "{prefered_genres} contains 'Mecha'",
      "requiredIf": "{prefered_genres} contains 'Mecha'"
     },
     {
      "name": "Music_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Music Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Your Lie in April",
          "text": "Your Lie in April",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20665-CnzR2zVpdxtR.png"
         },
         {
          "value": "K-ON!",
          "text": "K-ON!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5680-Xh6B67KuZ2PU.png"
         },
         {
          "value": "given",
          "text": "given",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108430-LcVOT7ntUbjT.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Music",
        "visibleIf": "{prefered_genres} contains 'Music'",
        "indent": 2,
        "title": "Have you seen and liked any of these Music anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Music'",
        "requiredIf": "{prefered_genres} contains 'Music'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Your Lie in April",
          "text": "Your Lie in April"
         },
         {
          "value": "K-ON!",
          "text": "K-ON!"
         },
         {
          "value": "given",
          "text": "given"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "columnMinWidth": "100",
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "100"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Music'",
      "enableIf": "{prefered_genres} contains 'Music'",
      "requiredIf": "{prefered_genres} contains 'Music'"
     },
     {
      "name": "Mystery_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Mystery Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Death Note",
          "text": "Death Note",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg"
         },
         {
          "value": "ERASED",
          "text": "ERASED",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21234-v2NMgPyoVRoM.jpg"
         },
         {
          "value": "Rascal Does Not Dream of Bunny Girl Senpai",
          "text": "Rascal Does Not Dream of Bunny Girl Senpai",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101291-Hjz1ToFL5sCG.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Mystery",
        "visibleIf": "{prefered_genres} contains 'Mystery'",
        "indent": 2,
        "title": "Have you seen and liked any of these Mystery anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Mystery'",
        "requiredIf": "{prefered_genres} contains 'Mystery'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Death Note",
          "text": "Death Note"
         },
         {
          "value": "ERASED",
          "text": "ERASED"
         },
         {
          "value": "Rascal Does Not Dream of Bunny Girl Senpai",
          "text": "Rascal Does Not Dream of Bunny Girl Senpai"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Mystery'",
      "enableIf": "{prefered_genres} contains 'Mystery'",
      "requiredIf": "{prefered_genres} contains 'Mystery'"
     },
     {
      "name": "Psychological_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Psychological Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Steins;Gate",
          "text": "Steins;Gate",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-7pdcVzQSkKxT.jpg"
         },
         {
          "value": "Mob Psycho 100",
          "text": "Mob Psycho 100",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21507-UaVmcRIUjhUa.jpg"
         },
         {
          "value": "Kaguya-sama: Love is War",
          "text": "Kaguya-sama: Love is War",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101921-qSV6zMacSDm4.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Psychological",
        "visibleIf": "{prefered_genres} contains 'Psychological'",
        "indent": 2,
        "title": "Have you seen and liked any of these Action anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Psychological'",
        "requiredIf": "{prefered_genres} contains 'Psychological'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Steins;Gate",
          "text": "Steins;Gate"
         },
         {
          "value": "Mob Psycho 100",
          "text": "Mob Psycho 100"
         },
         {
          "value": "Kaguya-sama: Love is War",
          "text": "Kaguya-sama: Love is War"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Psychological'",
      "enableIf": "{prefered_genres} contains 'Psychological'",
      "requiredIf": "{prefered_genres} contains 'Psychological'"
     },
     {
      "name": "Romance_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Romance Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Toradora!",
          "text": "Toradora!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4224-3Bh0rm99N6Vl.jpg"
         },
         {
          "value": "Anohana: The Flower We Saw That Day",
          "text": "Anohana: The Flower We Saw That Day",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9989-qCd2RgAL0P8I.png"
         },
         {
          "value": "The Devil is a Part-Timer!",
          "text": "The Devil is a Part-Timer!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx15809-4idxcBvQocbC.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Romance",
        "visibleIf": "{prefered_genres} contains 'Romance'",
        "indent": 2,
        "title": "Have you seen and liked any of these Romance anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Romance'",
        "requiredIf": "{prefered_genres} contains 'Romance'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Toradora!",
          "text": "Toradora!"
         },
         {
          "value": "Anohana: The Flower We Saw That Day",
          "text": "Anohana: The Flower We Saw That Day"
         },
         {
          "value": "The Devil is a Part-Timer!",
          "text": "The Devil is a Part-Timer!"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Romance'",
      "enableIf": "{prefered_genres} contains 'Romance'",
      "requiredIf": "{prefered_genres} contains 'Romance'"
     },
     {
      "name": "Sci-Fi_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Sci-Fi Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Dr. STONE",
          "text": "Dr. STONE",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-BBxkPhen07Zj.jpg"
         },
         {
          "value": "Cowboy Bebop",
          "text": "Cowboy Bebop",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png"
         },
         {
          "value": "Charlotte",
          "text": "Charlotte",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20997-FGhaAtfnXCsH.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Sci-Fi",
        "visibleIf": "{prefered_genres} contains 'Sci-Fi'",
        "indent": 2,
        "title": "Have you seen and liked any of these Sci-Fi anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Sci-Fi'",
        "requiredIf": "{prefered_genres} contains 'Sci-Fi'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Dr. STONE",
          "text": "Dr. STONE"
         },
         {
          "value": "Cowboy Bebop",
          "text": "Cowboy Bebop"
         },
         {
          "value": "Charlotte",
          "text": "Charlotte"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Sci-Fi'",
      "enableIf": "{prefered_genres} contains 'Sci-Fi'",
      "requiredIf": "{prefered_genres} contains 'Sci-Fi'"
     },
     {
      "name": "Slice of Life_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Slice of Life Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Violet Evergarden",
          "text": "Violet Evergarden",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21827-10F6m50H4GJK.png"
         },
         {
          "value": "My Teen Romantic Comedy SNAFU",
          "text": "My Teen Romantic Comedy SNAFU",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx14813-BC8aanHK9fju.jpg"
         },
         {
          "value": "Love, Chunibyo & Other Delusions",
          "text": "Love, Chunibyo & Other Delusions",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx14741-MI3STWwE0bQH.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Slice of Life",
        "visibleIf": "{prefered_genres} contains 'Slice of Life'",
        "indent": 2,
        "title": "Have you seen and liked any of these Slice of Life anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Slice of Life'",
        "requiredIf": "{prefered_genres} contains 'Slice of Life'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Violet Evergarden",
          "text": "Violet Evergarden"
         },
         {
          "value": "My Teen Romantic Comedy SNAFU",
          "text": "My Teen Romantic Comedy SNAFU"
         },
         {
          "value": "Love, Chunibyo & Other Delusions",
          "text": "Love, Chunibyo & Other Delusions"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Slice of Life'",
      "enableIf": "{prefered_genres} contains 'Slice of Life'",
      "requiredIf": "{prefered_genres} contains 'Slice of Life'"
     },
     {
      "name": "Sports_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Sports Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "HAIKYU!!",
          "text": "HAIKYU!!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20464-eW7ZDBOcn74a.png"
         },
         {
          "value": "Kuroko's Basketball",
          "text": "Kuroko's Basketball",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11771-82QwcjXwGoeg.jpg"
         },
         {
          "value": "Yuri!!! On Ice",
          "text": "Yuri!!! On Ice",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21709-yA9pmWiUJrQZ.png"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Sports",
        "visibleIf": "{prefered_genres} contains 'Sports'",
        "indent": 2,
        "title": "Have you seen and liked any of these Sports anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Sports'",
        "requiredIf": "{prefered_genres} contains 'Sports'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "HAIKYU!!",
          "text": "HAIKYU!!"
         },
         {
          "value": "Kuroko's Basketball",
          "text": "Kuroko's Basketball"
         },
         {
          "value": "Yuri!!! On Ice",
          "text": "Yuri!!! On Ice"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Sports'",
      "enableIf": "{prefered_genres} contains 'Sports'",
      "requiredIf": "{prefered_genres} contains 'Sports'"
     },
     {
      "name": "Supernatural_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Supernatural Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Noragami",
          "text": "Noragami",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20447-EoQXeygHaVCK.jpg"
         },
         {
          "value": "Angel Beats!",
          "text": "Angel Beats!",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6547-3jWzWyXg34Et.png"
         },
         {
          "value": "Blue Exorcist",
          "text": "Blue Exorcist",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9919-Svl7SURz7UtD.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Supernatural",
        "visibleIf": "{prefered_genres} contains 'Supernatural'",
        "indent": 2,
        "title": "Have you seen and liked any of these Supernatural anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Supernatural'",
        "requiredIf": "{prefered_genres} contains 'Supernatural'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Noragami",
          "text": "Noragami"
         },
         {
          "value": "Angel Beats!",
          "text": "Angel Beats!"
         },
         {
          "value": "Blue Exorcist",
          "text": "Blue Exorcist"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Supernatural'",
      "enableIf": "{prefered_genres} contains 'Supernatural'",
      "requiredIf": "{prefered_genres} contains 'Supernatural'"
     },
     {
      "name": "Thriller_Page",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Thriller Anime Covers",
        "hideNumber": true,
        "readOnly": true,
        "commentText": "hi there",
        "choices": [
         {
          "value": "Death Parade",
          "text": "Death Parade",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20931-bktYqOcxPERi.jpg"
         },
         {
          "value": "Another",
          "text": "Another",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11111-Y4QgkX8gJQCa.png"
         },
         {
          "value": "PSYCHO-PASS",
          "text": "PSYCHO-PASS",
          "imageLink": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx13601-tgjUlf4eQOyx.jpg"
         }
        ],
        "colCount": 4,
        "showLabel": true
       },
       {
        "type": "matrixdropdown",
        "name": "Thriller",
        "visibleIf": "{prefered_genres} contains 'Thriller'",
        "indent": 2,
        "title": "Have you seen and liked any of these Thriller anime? ",
        "hideNumber": true,
        "enableIf": "{prefered_genres} contains 'Thriller'",
        "requiredIf": "{prefered_genres} contains 'Thriller'",
        "columns": [
         {
          "name": "Anime",
          "title": "Animes",
          "cellType": "checkbox"
         }
        ],
        "columnLayout": "vertical",
        "choices": [
         {
          "value": "Death Parade",
          "text": "Death Parade"
         },
         {
          "value": "Another",
          "text": "Another"
         },
         {
          "value": "PSYCHO-PASS",
          "text": "PSYCHO-PASS"
         }
        ],
        "cellType": "radiogroup",
        "columnColCount": 1,
        "rows": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         },
         {
          "value": "Maybe",
          "text": "Haven't watched it but heard of it"
         }
        ],
        "rowTitleWidth": "75"
       }
      ],
      "visibleIf": "{prefered_genres} contains 'Thriller'",
      "enableIf": "{prefered_genres} contains 'Thriller'",
      "requiredIf": "{prefered_genres} contains 'Thriller'"
     }
    ],
    "sendResultOnPageNext": true,
    "showProgressBar": "bottom"
   };
export default json;
