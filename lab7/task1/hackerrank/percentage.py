n = int(input())
marks = list()

i = 0
while i < n:
    m = input()
    key, value1, value2, value3 = m.split(' ')
    marks.append((key, float(value1), float(value2), float(value3)))
    i = i + 1

s = input()

res = 0
for i in range(n):
    if marks[i][0] == s:
        res = "{:.2f}".format((marks[i][1] + marks[i][2] + marks[i][3]) / 3)
        break

print(res)

