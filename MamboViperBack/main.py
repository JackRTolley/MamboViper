import sys

class CommentGenerator:
    def __init__(self):
        pass

    def validateCommandLineArguments(self):
        try:
            args = sys.argv
            # print(args)
            if ( "-a" in args or "--All" in args ):
                # Everything
                pass
            elif ( "-f " in args or "--Funspiracy" in args):
                # Funspiracy
                pass
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
                raise Exception(("Invalid Option.\nPlease see the below help section."))
        except Exception as e:
            # stdout command help.
            return (f"An Error Occured: {e}" + self.displayCommandHelp())
         
    
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


    def run(self):
        return self.validateCommandLineArguments()


if __name__ == "__main__":
    CommentGenerator().run()