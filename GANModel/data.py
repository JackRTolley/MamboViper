import pandas as pd

data = pd.read_json("Feb28.json", lines=True, chunksize=100000)

limit = 0
for chunk in data:
    
    block = pd.DataFrame(chunk)
    block = block[['controversiality','body', 'score', 'gildings']]
    block = block[block['controversiality']==1]

    with open('Feb28Filtered.csv', 'a') as f:
        block.to_csv(f, header=False)

    print(block)
