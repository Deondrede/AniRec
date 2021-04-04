#still need to gather the other half of the anime from the AniList.csv file
#read the comments to understand what is going on

import json
import csv
import pandas as pd
import requests
import time

#created the header of the csv file that will be made at the end of the program
record=[["ID", "Title: Romanji", "Title:English","Type","Genres", "C.I: XL", "C.I: L","C.I: M","Plot"]]

#reading in the csv file that has all the Mal IDs that I need to search for
MAL_info = pd.read_csv('AnimeList.csv', sep=",")

#getting only the IDs from MAL_info
Mal_ids=MAL_info['anime_id']
size = int(Mal_ids.shape[0])

#number =10
#was able to get up to 6026 on the first round
#count = 0 #for the first round
count =6026 #for the second round that hasn't been done yet

for count in range (size):
    # Here we define our query as a multi-line string
    query = '''
    query ($id: Int) 
    { # Define which variables will be used in the query (id)
      Media (idMal: $id, isAdult:false) 
      { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
        id
        type
        title {
          romaji
          english
        }
        genres
        coverImage{
          extraLarge
          large
          medium
        }
        description
      }
    }
    '''

    # Define our query variables and values that will be used in the query request
    variables = {
        'id': int(Mal_ids[count])
    }

    url = 'https://graphql.anilist.co'

    # Make the HTTP Api request
    response = requests.post(url, json={'query': query, 'variables': variables})
    act = response.json()
    #print(act)
    
    
    key_to_find = 'errors' #checks is there is an error,
    if key_to_find in act: #if error, continue to the next call
        pass
    else: #else, pulling all the data from act and organizing it into an array to add to record
        new=[]
        new.append(act['data']['Media']['id'])
        new.append(act['data']['Media']['title']['romaji'])
        new.append(act['data']['Media']['title']['english'])
        new.append(act['data']['Media']['type'])
        new.append(act['data']['Media']['genres'])
        new.append(act['data']['Media']['coverImage']['extraLarge'])
        new.append(act['data']['Media']['coverImage']['large'])
        new.append(act['data']['Media']['coverImage']['medium'])
        new.append(act['data']['Media']['description'])
        record.append(new)
    time.sleep(1) #a break between each call as to hopefully not reach the 90 API calls per minute limit


#after the for loop is done, create the csv file with all the pulled information
with open('AniList_Info.csv', 'w', newline='') as file:
    writer = csv.writer(file, quoting=csv.QUOTE_NONNUMERIC, delimiter=',')
    writer.writerows(record)