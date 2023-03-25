n = int(input())
l = list()

i = 0
while i < n:
    c = tuple(input().split(' '))
    if c[0] == "append":
        l.append(int(c[1]))
    elif c[0] == "insert":
        l.insert(int(c[1]), int(c[2]))
    elif c[0] == "print":
        print(l)
    elif c[0] == "remove":
        for j in l:
            if j == int(c[1]):
                l.remove(j)
                break
    elif c[0] == "sort":
        l.sort()
    elif c[0] == "pop":
        l.pop()
    elif c[0] == "reverse":
        l.reverse()

    i = i + 1

