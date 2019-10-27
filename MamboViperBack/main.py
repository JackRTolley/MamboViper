import sys
import os
import json
import torch
import argparse

from model import SentenceVAE
from utils import to_var, idx2word, interpolate

import warnings
warnings.simplefilter("always")
warnings.simplefilter("error")
warnings.simplefilter("ignore")

class CommentGenerator:
    def __init__(self):
        pass

    def validateCommandLineArguments(self, args):
        try:
            # print(args)
            if ( "-a" in args or "--All" in args ):
                # Everything
                result = self.load_model('finaldata')
            elif ( "-f" in args or "--Funspiracy" in args):
                # Funspiracy
                result = self.load_model('funnycon')
            elif ( "-r" in args or "--Reddit" in args):
                # Reddit
                pass
            elif ( "-g" in args or "--Gaming" in args):
                # Gaming
                pass
            elif ( "-s" in args or "--Sport" in args):
                pass
            elif  ( "-h" in args or "--Help" in args):
                return ( "Help Menu..." + self.displayCommandHelp())
            else:
                raise Exception(("Invalid Paramater."))

            return({
                "result": "success",
                "info": "Successfully Generated Comments",
                "comments": result,
            })
        except Exception as e:
            # stdout command help.
            print(self.displayCommandHelp())
            return ({
                "result": "error",
                "info": "An Error occurred whilst generating comments.",
                "error":f"{e}"
                })
         
    
    def displayCommandHelp(self):
        return ("""        
Options
----------------------
-s, --Sport         Provide only Sports-related comments
-g, --Gaming        Provide only Gaming-related comments
-f, --Funspiracy    Provide only Fun-conspiracy-related commments
-r, --Reddit        Provide only General Reddit Comments (i.e. AskReddit)

-a, --All           Provide comments from all above categories.

Miscellaneous
----------------------
-h, --Help          Display this help menu.
\n
        """)


    def run(self, args):
        return self.validateCommandLineArguments(args)


    def load_model(self, filename):
        with open('data/'+filename+'.vocab.json','r') as file:
            vocab = json.load(file)

        w2i, i2w = vocab['w2i'], vocab['i2w']

        model = SentenceVAE(
            vocab_size=len(w2i),
            sos_idx=w2i['<sos>'],
            eos_idx=w2i['<eos>'],
            pad_idx=w2i['<pad>'],
            unk_idx=w2i['<unk>'],
            max_sequence_length=50,
            embedding_size=400,
            rnn_type='gru',
            hidden_size=256,
            word_dropout=0.0,
            embedding_dropout=0.5,
            latent_size=16,
            num_layers=1,
            bidirectional=False
        )

        if not os.path.exists('data/'+filename+'.pytorch'):
            raise FileNotFoundError('data/'+filename+'.pytorch')

        model.load_state_dict(torch.load('data/'+filename+'.pytorch'))
        print("Model loaded from %s"%('data/'+filename+'.pytorch'))

        if torch.cuda.is_available():
            model = model.cuda()

        model.eval()

        samples, z = model.inference(n=10)
        print('----------SAMPLES----------')
        comments = idx2word(samples, i2w=i2w, pad_idx=w2i['<pad>'])
        print(comments[0])
        return comments[0]

