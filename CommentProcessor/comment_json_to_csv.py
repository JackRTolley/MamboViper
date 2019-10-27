import numpy as np
import pandas as pd
import csv

chunk_size = 100000

subreddits = ["apple","android","technology","cats","dogs","tech","programing","hardware","linux","aww",]


good_chars = list(" qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")


for sub in subreddits:
    csvFile = open("CommentProcessor/" + sub + ".csv", "w+")
    csvFile.close()

data = pd.read_json (r"C:\Users\Guy\Desktop\data\RC_2019-02-28\Comment_data.json", lines=True, chunksize=chunk_size)

i = chunk_size

for chunk in data:


    block = pd.DataFrame(chunk)
    #print(block.columns)
    block = block[['body','controversiality','score','gildings','subreddit_name_prefixed']]



    
    for comment in block.iterrows():
        if(comment[1]['controversiality'] > 0):

            is_from_sellected_subreddits = False

            for subreddit in subreddits:
                if  ((comment[1]['subreddit_name_prefixed'])[2:].lower()) == subreddit.lower():
                    is_from_sellected_subreddits = True
                    break

            if (is_from_sellected_subreddits):

                validComment = "".join([ char for char in comment[1]['body'] if char in good_chars])

                comment[1]['body'] = validComment

                split = comment[1]['body'].split(" ")

                #if valid:
                if len(split) < 30 and comment[1]['body'] != "deleted" and comment[1]['body'] != "removed" and len(comment[1]['body']) > 0:
                    print(comment[1]['body'])
                    print("")
                    newCommment = [comment[1]['body']]
                    print("added")
                    print("")
                    sub = comment[1]['subreddit_name_prefixed']
                    csvFile = open("CommentProcessor/" + sub[2:] + ".csv", "a", newline='')
                    writer = csv.writer(csvFile)
                    writer.writerow(newCommment)
                    csvFile.close()
                    
    print("Comments Proccessed:")
    print(i)
    print("")
    i = i + chunk_size

 
    

    
    

print("exited")