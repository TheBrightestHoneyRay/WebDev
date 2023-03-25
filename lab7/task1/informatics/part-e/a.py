def minx(a, b, c, d):
    m = a
    l = [a, b, c, d]
    for i in range(len(l)):
        if l[i] <= m:
            m = l[i]
    return m


n = input()
n = list(map(int, n.split(' ')))

print(minx(n[0], n[1], n[2], n[3]))
