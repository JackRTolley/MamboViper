import numpy as np
import pandas as pd
import csv

subreddits = ["apple","android","technology","cats","dogs","tech","programing","hardware","linux","aww",]


good_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQUSTUVWXYZ,.'!?;:#~[]()_+-=<>"


for sub in subreddits:
    csvFile = open("CommentProcessor/" + sub + ".csv", "w+")
    csvFile.close()

data = pd.read_json (r"C:\Users\Guy\Desktop\data\RC_2019-02-28\Comment_data.json", lines=True, chunksize=10000)

i = 1

for chunk in data:

    print("Chunk:")
    print(i)
    print("")
    i = i + 1

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

            if (is_from_sellected_subreddits and (comment[1]['body'] != '[removed]') and (comment[1]['body'] != '[deleated]')):
                
                valid = True

                for letter in comment:
                    for char in good_chars:
                        any_bad_chars = False
                        if char != letter:
                            any_bad_chars = True
                        


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

 
    

    
    

print("exited")