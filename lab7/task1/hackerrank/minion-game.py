def minion_game(string):
    vowcnt = 0
    concnt = 0
    slen = len(string)
    vowels = 'AEIOU'

    for i in range(slen):
        if string[i] in vowels:
            vowcnt += (slen - i)
        else:
            concnt += (slen - i)

    if vowcnt < concnt:
        print('Kevin ', concnt)
    elif vowcnt > concnt:
        print('Stuart ', vowcnt)
    else:
        print('Draw')


string = input()
minion_game(string)
