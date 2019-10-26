import pandas as pd


import torch.nn as nn

data = pd.read_json("./Feb28.json", lines=True, chunksize=100000)


def formati(x):

    r = [a for a in x.lower() if a in 'abcdefghijklmnopqrstuvwxyz,. !?&']
    r = "".join(r)
    return r


limit = 0
for chunk in data:
    
    block = pd.DataFrame(chunk)
    block = block[['controversiality','body', 'score', 'gildings']]
    block = block[block['controversiality']==1]
    block = block[block['body'].apply(len) <= 250]
    block = block['body'].apply(formati)

    #popopopop
    with open('Feb28Filtered.csv', 'a') as f:
        block.to_csv(f, header=False)

    print(block)

